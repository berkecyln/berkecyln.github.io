# berkecyln.github.io

Personal site: [berkecyln.github.io](https://berkecyln.github.io)

Plain HTML, CSS and JS. No build step and no dependencies, so pushing to `main` is all it takes for GitHub Pages to serve it.

## Layout

```
index.html      the whole page
styles.css      colour tokens in :root, then layout
main.js         theme toggle, scroll spy, footer year
.nojekyll       tells Pages to skip Jekyll processing
assets/
  BerkeCeylan_CV.pdf
  berke.jpg
  projects/     project figures
```

## Local preview

```sh
python3 -m http.server 8000
```

Then open http://localhost:8000

## Updating

* Text, projects and experience live in `index.html`. Each section is commented.
* Colours are the `:root` and `html[data-theme="dark"]` blocks at the top of `styles.css`.
* To swap the CV, replace `assets/BerkeCeylan_CV.pdf` and keep the filename.

## House rules

* No dash characters in visible text. Use commas, full stops or the word "to" for ranges.
* Project figures are optimised before they are committed. The DreMa demo went from an 8.2 MB GIF to a 366 KB mp4 via ffmpeg.
