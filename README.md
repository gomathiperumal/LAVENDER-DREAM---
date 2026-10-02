# Lavender Dream

A React and Vite birthday surprise with a countdown, photo, anime gallery, and birthday letter.

## Netlify deployment

The included `netlify.toml` configures Node.js 22, the build command `npm run build`, and the publish directory `dist`. Connect this repository to the existing Netlify project and deploy using these settings. The site does not require environment variables or a backend.

The application entry point and images live in the repository root. Images are imported so Vite includes them in the deployed output.

## Local development

Install dependencies with `npm ci`, then start the development server with `npm run dev`. Run `npm run lint` for static checks.

## Countdown date

The reveal date in `App.jsx` is August 20, 2026 at midnight in UTC+05:30. After this date, the birthday reveal appears immediately. Change `TARGET_DATE` and the displayed birthday date together if a different event date is intended.
