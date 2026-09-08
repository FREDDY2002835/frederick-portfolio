# Frederick Muhimuzi — Portfolio

A dark-blue, glass/"mirror" themed portfolio built with React + Vite.

## Run it locally

```bash
npm install
npm run dev
```

Open the printed local URL (usually http://localhost:5173).

## Before you apply — edit these placeholders

1. **`src/components/Contact.jsx`** — replace the email address, GitHub URL,
   and LinkedIn URL with your real ones.
2. **`src/components/Projects.jsx`** — the "View repo" and "Live demo" links
   for TaskFlow are `#` placeholders. Point them at your real GitHub repo
   and a live/deployed demo if you have one.
3. Add a second project: duplicate the `<article className="project-feature">`
   block (or the whole `Projects.jsx` file structure) for your next project,
   and remove the "Add your next project here" placeholder box once you do.
4. Optional: swap the two Unsplash photos (in `About.jsx` and
   `Projects.jsx`) for your own screenshots of TaskFlow's dashboard/UI —
   real product screenshots are usually stronger than stock photography
   for a developer portfolio.

## Get a live, shareable link (free)

The fastest options, in order of ease:

**Vercel (recommended)**
1. Push this folder to a new GitHub repo.
2. Go to vercel.com -> "Add New Project" -> import that repo.
3. Vercel auto-detects Vite. Click Deploy. You'll get a URL like
   `frederick-portfolio.vercel.app` in under a minute.

**Netlify (drag and drop, no GitHub needed)**
1. Run `npm run build` -- this creates a `dist/` folder.
2. Go to app.netlify.com/drop and drag the `dist/` folder into the browser.
3. Netlify gives you a live URL immediately.

**GitHub Pages**
1. `npm install -D gh-pages`
2. Add to `package.json` scripts: `"deploy": "gh-pages -d dist"`
3. In `vite.config.js`, set `base: '/your-repo-name/'`
4. `npm run build && npm run deploy`

Vercel or Netlify are the better fit for a job application -- no path
configuration needed and the URL looks cleaner.
