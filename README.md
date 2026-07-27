# Tadeas Portfolio

A personal portfolio website with a cyber-professional aesthetic — neon accents, glassmorphism, and smooth scroll-reveal animations.

## Tech stack

- [TanStack Start](https://tanstack.com/start) — full-stack React framework
- [React 19](https://react.dev) + [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS v4](https://tailwindcss.com)
- [Vercel](https://vercel.com) — recommended hosting

## Local development

You need Node.js 20+ (or Bun). Clone the repo, install dependencies, and start the dev server:

```sh
npm i
npm run dev
```

Or with Bun:

```sh
bun i
bun run dev
```

The site will be available at `http://localhost:8080` by default.

## Build

```sh
npm run build
```

## Self-host on Vercel

1. Push this project to a GitHub repository.
2. Go to [vercel.com](https://vercel.com) and click **Add New Project**.
3. Import your GitHub repository.
4. Keep the default settings:
   - Framework preset: **Other** (Vercel auto-detects TanStack Start from `vite.config.ts`)
   - Build command: `npm run build`
   - Output directory: leave empty (TanStack Start writes to `.output` automatically)
5. Click **Deploy**.

The `preset: "vercel"` in `vite.config.ts` makes the production build compatible with Vercel's serverless runtime.

## Project structure

```text
src/
  routes/           # TanStack Start routes
  lib/              # Utilities and helpers
  styles.css        # Global theme, Tailwind imports, custom animations
  server.ts         # SSR server entry
public/             # Static assets (favicon, images)
vite.config.ts      # Vite + TanStack Start configuration
```

## License

This code is yours — use, modify, and deploy it however you like.
