# berkecyln.github.io

Personal portfolio site — [berkecyln.github.io](https://berkecyln.github.io)

Plain HTML/CSS/JS. No build step, no dependencies: push to `main` and GitHub Pages serves it.

## Layout

```
index.html          the whole page
styles.css          design tokens (:root) + layout
main.js             theme toggle, scroll-spy, reveal-on-scroll
.nojekyll           tells Pages to skip Jekyll processing
assets/
  BerkeCeylan_CV.pdf
  berke.jpg
  projects/         project figures
```

## Local preview

```sh
python3 -m http.server 8000
# → http://localhost:8000
```

## Updating

- **Text, projects, experience** — edit `index.html` directly; each section is commented.
- **Colours** — the `:root` and `html[data-theme="dark"]` blocks at the top of `styles.css`.
- **New CV** — replace `assets/BerkeCeylan_CV.pdf`, keeping the filename.
