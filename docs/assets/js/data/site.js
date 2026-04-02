const SITE_CONFIG = {
  heroLabel: '// Data Engineer · Interview Prep',
  heroTitle: 'Master <em>Plan</em>',
  heroSubtitle:
    'A structured, topic-by-topic breakdown across SQL, Python, PySpark, Data Warehousing, Cloud, Linux, and behavioral prep — built for DE interviews at FAANG, scale-ups, and remote-first companies.',
  authorName: 'Muhammad Taimoor Akmal',
  authorRole: 'Data Engineer',
  footerSignature: 'Built by Muhammad Taimoor Akmal · DE Interview Prep',
  lastUpdated: 'April 2026',
  storageKey: 'de-master-plan-v2-progress',
  links: [
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/taimoorakmal', icon: '↗' },
    { label: 'GitHub', url: 'https://github.com/Mtaimoorakmal', icon: '↗' },
    { label: 'Resume', url: 'https://drive.google.com/file/d/1-op8xM9WV1ajctqbD8jVbiIku2DkLya8/view', icon: '↗' }
  ],
  weeks: [
    { title: 'SQL fundamentals + 20 problems', focus: 'Core querying, joins, windows, interview patterns' },
    { title: 'Python + DE scripting + Linux', focus: 'Sharpen language fundamentals, file handling, APIs, and terminal confidence' },
    { title: 'PySpark fundamentals + programs', focus: 'Architecture, transformations, joins, performance' },
    { title: 'DW + Project + Behavioral + Research', focus: 'Modeling, storytelling, systems thinking, interview prep' }
  ],
  categories: {
    all: { label: 'All' },
    sql: { label: 'SQL', tag: 'SQL', tagClass: 't-sql', accent: 'var(--accent-sql)' },
    python: { label: 'Python', tag: 'Python', tagClass: 't-python', accent: 'var(--accent-python)' },
    spark: { label: 'PySpark', tag: 'PySpark', tagClass: 't-spark', accent: 'var(--accent-spark)' },
    dw: { label: 'Data Warehousing', tag: 'Data Warehousing', tagClass: 't-dw', accent: 'var(--accent-dw)' },
    proj: { label: 'Project / Cloud', tag: 'Cloud', tagClass: 't-proj', accent: 'var(--accent-proj)' },
    linux: { label: 'Linux', tag: 'Linux', tagClass: 't-linux', accent: 'var(--accent-linux)' },
    int: { label: 'Interview', tag: 'Interview', tagClass: 't-int', accent: 'var(--accent-int)' }
  }
};
