const state = {
  activeCategory: 'all',
  searchTerm: '',
  openSections: new Set(),
  completedItems: loadCompletedItems()
};

function loadCompletedItems() {
  try {
    const raw = localStorage.getItem(SITE_CONFIG.storageKey);
    const parsed = raw ? JSON.parse(raw) : [];
    return new Set(Array.isArray(parsed) ? parsed : []);
  } catch {
    return new Set();
  }
}

function saveCompletedItems() {
  localStorage.setItem(SITE_CONFIG.storageKey, JSON.stringify([...state.completedItems]));
}

function getAllItemsCount() {
  return TRACKS.reduce((sum, track) => sum + getTrackItemCount(track), 0);
}

function getTrackItemCount(track) {
  return track.subs.reduce((sum, sub) => sum + sub.items.length, 0);
}

function getPracticeCount() {
  return TRACKS
    .filter(track => /problems|programs/i.test(track.id) || /problems|programs/i.test(track.title))
    .reduce((sum, track) => sum + getTrackItemCount(track), 0);
}

function getConceptCount() {
  return getAllItemsCount() - getPracticeCount();
}

function getCompletionSummary() {
  const total = getAllItemsCount();
  const done = state.completedItems.size;
  const pct = total === 0 ? 0 : Math.round((done / total) * 100);
  return { total, done, pct };
}

function escapeHtml(text) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function highlightMatch(text, query) {
  if (!query) return escapeHtml(text);
  const escaped = escapeHtml(text);
  const pattern = new RegExp(`(${escapeRegExp(query)})`, 'ig');
  return escaped.replace(pattern, '<mark>$1</mark>');
}

function escapeRegExp(text) {
  return text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function init() {
  renderHero();
  renderStats();
  renderTimeline();
  renderFilters();
  wireToolbar();
  renderCoverage();
  renderSections();
  renderFooter();
}

function renderHero() {
  document.getElementById('hero-label').textContent = SITE_CONFIG.heroLabel;
  document.getElementById('hero-title').innerHTML = SITE_CONFIG.heroTitle;
  document.getElementById('hero-subtitle').textContent = SITE_CONFIG.heroSubtitle;
  document.getElementById('author-name').textContent = SITE_CONFIG.authorName;
  document.getElementById('author-role').textContent = SITE_CONFIG.authorRole;

  const linksHtml = SITE_CONFIG.links
    .map(link => `<a class="link-pill" href="${link.url}" target="_blank" rel="noreferrer">${link.label} <span>${link.icon || '↗'}</span></a>`)
    .join('');
  document.getElementById('hero-links').innerHTML = linksHtml;
}

function renderStats() {
  const completion = getCompletionSummary();
  const stats = [
    { kicker: 'Tracks', value: TRACKS.length, note: 'Organized topic clusters' },
    { kicker: 'Practice items', value: `${getPracticeCount()}+`, note: 'Coding, SQL, and PySpark drills' },
    { kicker: 'Core concepts', value: `${getConceptCount()}+`, note: 'Systems, modeling, cloud, and interview prep' },
    { kicker: 'Completion', value: `${completion.pct}%`, note: `${completion.done} of ${completion.total} items done` }
  ];

  document.getElementById('stats').innerHTML = stats
    .map(stat => `
      <div class="stat">
        <div class="stat-kicker">${stat.kicker}</div>
        <div class="stat-value">${stat.value}</div>
        <div class="stat-note">${stat.note}</div>
      </div>
    `)
    .join('');
}

function renderTimeline() {
  document.getElementById('timeline').innerHTML = SITE_CONFIG.weeks
    .map((week, index) => `
      <article class="week">
        <div class="week-num">Week ${String(index + 1).padStart(2, '0')}</div>
        <div class="week-title">${week.title}</div>
        <div class="week-focus">${week.focus}</div>
      </article>
    `)
    .join('');
}

function renderCoverage() {
  const counts = Object.entries(SITE_CONFIG.categories)
    .filter(([key]) => key !== 'all')
    .map(([key, value]) => {
      const total = TRACKS.filter(track => track.cat === key).reduce((sum, track) => sum + getTrackItemCount(track), 0);
      return { key, label: value.label, total, accent: value.accent };
    });

  const max = Math.max(...counts.map(item => item.total), 1);
  document.getElementById('coverage-bars').innerHTML = counts
    .map(item => `
      <div class="progress-row">
        <div class="progress-label">${item.label}</div>
        <div class="bar-wrap">
          <div class="bar-fill" style="--w:${Math.round((item.total / max) * 100)}%; background:${item.accent};"></div>
        </div>
        <div class="progress-pct">${item.total} items</div>
      </div>
    `)
    .join('');

  const completion = getCompletionSummary();
  document.getElementById('progress-summary').textContent = `${completion.done} / ${completion.total} completed`;
}

function renderFilters() {
  const filters = document.getElementById('filters');
  filters.innerHTML = Object.entries(SITE_CONFIG.categories)
    .map(([key, category]) => `
      <button class="filt ${state.activeCategory === key ? 'active' : ''}" data-filter="${key}" type="button">${category.label}</button>
    `)
    .join('');

  filters.querySelectorAll('[data-filter]').forEach(button => {
    button.addEventListener('click', () => {
      state.activeCategory = button.dataset.filter;
      renderFilters();
      renderSections();
    });
  });
}

function wireToolbar() {
  document.getElementById('search-input').addEventListener('input', event => {
    state.searchTerm = event.target.value.trim().toLowerCase();
    renderSections();
  });

  document.getElementById('expand-all-btn').addEventListener('click', () => {
    getFilteredTracks().forEach(track => state.openSections.add(track.id));
    renderSections();
  });

  document.getElementById('collapse-all-btn').addEventListener('click', () => {
    state.openSections.clear();
    renderSections();
  });

  document.getElementById('reset-progress-btn').addEventListener('click', () => {
    const confirmed = window.confirm('Reset all saved progress for this page?');
    if (!confirmed) return;
    state.completedItems.clear();
    saveCompletedItems();
    renderStats();
    renderCoverage();
    renderSections();
  });
}

function getFilteredTracks() {
  const categoryFiltered = state.activeCategory === 'all'
    ? TRACKS
    : TRACKS.filter(track => track.cat === state.activeCategory);

  if (!state.searchTerm) return categoryFiltered;

  return categoryFiltered
    .map(track => filterTrackBySearch(track, state.searchTerm))
    .filter(Boolean);
}

function filterTrackBySearch(track, searchTerm) {
  const titleMatch = track.title.toLowerCase().includes(searchTerm);
  const matchedSubs = track.subs
    .map(sub => {
      const subTitleMatch = sub.title.toLowerCase().includes(searchTerm);
      const matchedItems = sub.items.filter(item => item.toLowerCase().includes(searchTerm));
      if (subTitleMatch) return { ...sub, items: sub.items };
      if (matchedItems.length) return { ...sub, items: matchedItems };
      return null;
    })
    .filter(Boolean);

  if (titleMatch) return track;
  if (!matchedSubs.length) return null;
  return { ...track, subs: matchedSubs };
}

function renderSections() {
  const tracks = getFilteredTracks();
  const totalCount = document.getElementById('total-count');
  totalCount.textContent = `Showing ${tracks.length} of ${TRACKS.length} tracks`;

  const sections = document.getElementById('sections');
  if (!tracks.length) {
    sections.innerHTML = '<div class="no-results">No tracks matched your search. Try a broader keyword or switch the filter.</div>';
    return;
  }

  sections.innerHTML = tracks.map(track => renderTrack(track)).join('');

  sections.querySelectorAll('[data-toggle-track]').forEach(button => {
    button.addEventListener('click', () => toggleSection(button.dataset.toggleTrack));
  });

  sections.querySelectorAll('.item-checkbox').forEach(checkbox => {
    checkbox.addEventListener('change', () => {
      const itemId = checkbox.dataset.itemId;
      if (checkbox.checked) state.completedItems.add(itemId);
      else state.completedItems.delete(itemId);
      saveCompletedItems();
      renderStats();
      renderCoverage();
      renderSections();
    });
  });
}

function renderTrack(track) {
  const trackItemCount = track.subs.reduce((sum, sub) => sum + sub.items.length, 0);
  const completedInTrack = track.subs.reduce((sum, sub, subIndex) => {
    return sum + sub.items.reduce((inner, _item, itemIndex) => {
      const itemId = getItemId(track.id, subIndex, itemIndex);
      return inner + (state.completedItems.has(itemId) ? 1 : 0);
    }, 0);
  }, 0);

  const shouldOpen = state.searchTerm ? true : state.openSections.has(track.id);
  const searchTerm = state.searchTerm;

  return `
    <article class="section ${shouldOpen ? 'open' : ''}" id="${track.id}">
      <button class="section-toggle" type="button" aria-expanded="${shouldOpen}" data-toggle-track="${track.id}">
        <span class="tag ${track.tagClass}">${track.tag}</span>
        <span class="sec-title-wrap">
          <span class="sec-title">${highlightMatch(track.title, searchTerm)}</span>
          <span class="sec-meta">${completedInTrack} / ${trackItemCount} completed</span>
        </span>
        <span class="sec-count">${trackItemCount} items</span>
        <span class="chevron">▶</span>
      </button>
      <div class="sec-body">
        ${track.subs.map((sub, subIndex) => renderSubsection(track, sub, subIndex)).join('')}
      </div>
    </article>
  `;
}

function renderSubsection(track, sub, subIndex) {
  return `
    <div class="subsec">
      <div class="subsec-title">${highlightMatch(sub.title, state.searchTerm)}</div>
      <div class="items">
        ${sub.items.map((item, itemIndex) => renderItem(track, subIndex, itemIndex, item)).join('')}
      </div>
    </div>
  `;
}

function renderItem(track, subIndex, itemIndex, itemText) {
  const itemId = getItemId(track.id, subIndex, itemIndex, itemText);
  const checked = state.completedItems.has(itemId);
  return `
    <label class="item ${checked ? 'is-complete' : ''}">
      <input class="item-checkbox" type="checkbox" data-item-id="${itemId}" ${checked ? 'checked' : ''} />
      <span class="item-text">${highlightMatch(itemText, state.searchTerm)}</span>
    </label>
  `;
}

function getItemId(trackId, subIndex, itemIndex) {
  return `${trackId}::${subIndex}::${itemIndex}`;
}

function toggleSection(trackId) {
  if (state.openSections.has(trackId)) state.openSections.delete(trackId);
  else state.openSections.add(trackId);
  renderSections();
}

function renderFooter() {
  document.getElementById('footer-signature').textContent = SITE_CONFIG.footerSignature;
  document.getElementById('footer-updated').textContent = `Last updated: ${SITE_CONFIG.lastUpdated}`;
  document.getElementById('footer-links').innerHTML = SITE_CONFIG.links
    .map(link => `<a href="${link.url}" target="_blank" rel="noreferrer">${link.label}</a>`)
    .join('');
}

init();
