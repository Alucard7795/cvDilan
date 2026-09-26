# Dilan García - Portfolio

Professional portfolio for Dilan Mauricio García Cuellar, a Full-Stack Developer and Systems Engineer based in Cali, Colombia. The site is built with React, strict TypeScript, and Vite, and presents professional experience, technical skills, education, languages, contact details, and downloadable English and Spanish CVs.

## Requirements

- Node.js 24
- npm (included with Node.js)

## Local development

```sh
nvm use
npm ci
npm start
```

Vite starts the development server at `http://localhost:3000` by default.

## Production build

```sh
npm run typecheck
npm run build
npm run preview
```

Run `npm run validate` to execute strict type checking followed by the production build.

The production site is written to `build/`. The configured base path is `/cvDilan/` for deployment at <https://alucard7795.github.io/cvDilan/>.

## Content maintenance

- Personal and résumé data and domain types: `src/data/resume.ts`
- Page structure: `src/App.tsx`
- Section components: `src/components/`
- English and Spanish CV files: `public/cv/`
- Avatar and static images: `public/images/`

Do not add private information, credentials, or API keys to the frontend. Everything compiled into the site is publicly downloadable.

## Deployment

The GitHub Pages workflow in `.github/workflows/deploy-pages.yml` runs after every push to `main`. It installs dependencies with `npm ci`, type-checks the source, builds the Vite application, and publishes `build/` through GitHub Pages.

In the repository settings, configure **Pages > Build and deployment > Source** as **GitHub Actions**.
