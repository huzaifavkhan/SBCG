# SBCG - Strategic Business Consulting Group [sbcg.co](https://www.sbcg.co/)

Marketing and services site for Strategic Business Consulting Group (SBCG). Built with Vite + React + TypeScript, Tailwind CSS, and shadcn/ui to showcase SBCG’s consulting, technology, and training offerings with rich service pages, news, and lead capture.

## Features
- Modern single-page experience with React Router sections for Home, About, Services, and detailed verticals (e.g., SBCG Technologies).
- Hero, feature highlights, carousels, and animated content powered by framer-motion for a polished feel.
- SEO meta management via reusable `SEO` component for page-specific titles, descriptions, and social previews.
- Responsive UI built on Tailwind CSS, Radix primitives, and shadcn/ui components.
- Ready-to-extend data models for news posts and service content.

## Tech Stack
- Vite, React 18, TypeScript
- Tailwind CSS + shadcn/ui (Radix UI primitives)
- React Router, framer-motion
- Supporting libs: lucide-react icons, react-helmet-async for SEO, react-query, date-fns

## Quick Start
1) Install dependencies  
```bash
npm install
```
2) Run the dev server  
```bash
npm run dev
```
3) Create a production build  
```bash
npm run build
```
4) Preview the build locally  
```bash
npm run preview
```

## Project Structure
- `src/pages` – top-level routes such as Home, About, Services, News, and service detail pages.
- `src/components` – layout scaffolding, hero/feature sections, carousels, SEO component, and shared UI pieces.
- `src/components/ui` – shadcn/ui building blocks (cards, buttons, dialogs, tables, etc.).
- `src/data` – structured content like news posts.
- `public/uploads` – logos, banners, team photos, and other media assets.

## Environment & Deployment
- Vercel-ready config at `vercel.json`; Vite uses `index.html` as the entry point.
- If you add integrations (e.g., email/analytics), place secrets in a `.env` file and load with Vite’s `import.meta.env`.

## Contributing
1) Fork and clone the repo.  
2) Create a feature branch.  
3) Commit with clear messages and open a PR.  

## License
Proprietary content © SBCG. Do not distribute without permission.

