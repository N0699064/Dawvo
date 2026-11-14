# Davwo Energy website (davwoenergy.co.uk)

Multi-page marketing site for Davwo Energy, built with Vite, React 19, TypeScript, Tailwind CSS v4 and React Router.

## Pages
| Route | Page |
| --- | --- |
| `/` | Home |
| `/solutions` | Solutions overview and platform architecture |
| `/solutions/marketplace` | Clean Energy Marketplace |
| `/solutions/suppliers` | Supplier Network |
| `/solutions/intelligent-pilot` | Intelligent Pilot |
| `/solutions/smart-cities` | Smart Cities & Smart Companies |
| `/distributors` | Distributors & Partners (Europe and Africa) |
| `/about` | About, mission, story and team |
| `/contact` | Contact |

Old URLs `/platform-architecture` and `/programme` redirect to `/solutions`.

## Develop
```bash
cd frontend
npm install
npm run dev      # http://localhost:3000
npm run build    # type-check + production build into frontend/build
npm run preview  # serve the build on http://localhost:4173
```

## Deploy (Netlify)
`netlify.toml` sets base `frontend`, command `npm run build`, publish `build` (that is, `frontend/build`), Node 20, and an SPA fallback to `index.html`.

All page content lives in `frontend/src/data/site.ts` and `frontend/src/pages/`. Images are in `frontend/public/images/`.
