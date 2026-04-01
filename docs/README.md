# DE Interview Prep — Master Plan V2

This version reorganizes the page into separate files so it is easier to maintain on GitHub Pages.

## Structure

```text
index.html
assets/
  css/main.css
  js/data.js
  js/app.js
```

## Where to edit content

### 1) Personal links and signature
Open `assets/js/data.js` and update:
- `authorName`
- `authorRole`
- `footerSignature`
- `lastUpdated`
- `links`

Example:

```js
links: [
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/taimoorakmal', icon: '↗' },
  { label: 'GitHub', url: 'https://github.com/Mtaimoorakmal', icon: '↗' },
  { label: 'Resume', url: './resume.pdf', icon: '↗' }
]
```

If you want a real resume link, upload `resume.pdf` to the project root.

### 2) Add or update sections
Still in `assets/js/data.js`, edit the `TRACKS` array.

Each track looks like this:

```js
{
  id: 'sql-concepts',
  cat: 'sql',
  tag: 'SQL',
  tagClass: 't-sql',
  title: 'SQL fundamentals — core concepts',
  subs: [
    {
      title: 'Querying basics',
      items: ['SELECT, WHERE, GROUP BY']
    }
  ]
}
```

### 3) Change styles
Open `assets/css/main.css`.

Useful areas:
- `:root` → colors, fonts, accents
- `.hero` → top section layout
- `.stats`, `.timeline`, `.section` → card design
- `.item`, `.item-checkbox` → progress styles

### 4) Change behavior
Open `assets/js/app.js`.

This file controls:
- filtering
- search
- expand/collapse
- saved progress using `localStorage`
- rendering cards and counts

## GitHub Pages deployment

### Option A — simplest
1. Upload all files to the root of your GitHub repository.
2. In GitHub, open **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select your main branch and root folder.
5. Save.

### Option B — docs folder
You can move this project into a `/docs` folder and point GitHub Pages there.

## Good maintenance practice
- Keep all content in `data.js`
- Keep all styles in `main.css`
- Keep all logic in `app.js`
- Avoid adding inline CSS or inline `onclick`
- Update only one place for links and personal branding
- Use the `TRACKS` array as the source of truth

## Suggested next improvements
- Add a mini nav with anchor links
- Add export/import progress
- Add dark/light theme toggle
- Add a project showcase section
- Add a notes section per track
