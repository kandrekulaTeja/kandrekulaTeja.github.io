# Sai Teja Kandrekula — Portfolio

Personal website built with Next.js (static export) and Tailwind CSS, deployed to GitHub Pages.

## Edit content
All text lives in `src/data/profile.ts`.
- Photo: add `public/photo.jpg` and set `photo: "/photo.jpg"`.
- CV: add `public/cv.pdf` and set `cv: "/cv.pdf"`.
- Email: set `links.email`.

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:3000

## Deploy
Pushing to `main` builds and publishes the site via `.github/workflows/deploy.yml`.
In the repo settings, set **Pages → Source** to **GitHub Actions** once.
