# Split data structure for GitHub Pages

## Files changed
- `index.html` → loads category files instead of one `data.js`
- `assets/js/data/site.js` → site config only
- `assets/js/data/sql.js`
- `assets/js/data/python.js`
- `assets/js/data/pyspark.js`
- `assets/js/data/dw.js`
- `assets/js/data/cloud.js`
- `assets/js/data/linux.js`
- `assets/js/data/interview.js`
- `assets/js/data/tracks.js` → combines all category arrays into `TRACKS`

## Good news
Your current `app.js` should not need changes **if** it already reads `SITE_CONFIG` and `TRACKS` globally.

## What to delete from repo
- Remove old `assets/js/data.js` after replacing script tags in `index.html`.

## Python changes included
Added 2 new tracks:
- Python — files, APIs, and data ingestion
- Python — edge cases and production patterns
