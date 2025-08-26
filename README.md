# Advanced Portfolio (Vite + React + Tailwind)

An advanced, fully-editable portfolio website scaffolded with Vite + React + Tailwind CSS, including dark mode, animations (Framer Motion), and clean, modular components.

## Quick Start

1. **Install Node.js** (v18+ recommended). Check with:
   ```bash
   node -v
   npm -v
   ```

2. **Open in VS Code**
   - Extract the zip and open the folder in VS Code (`File` → `Open Folder...`).

3. **Install deps**
   ```bash
   npm install
   ```

4. **Run dev server**
   ```bash
   npm run dev
   ```
   Open the printed local URL (usually http://localhost:5173).

5. **Build & Preview (optional)**
   ```bash
   npm run build
   npm run preview
   ```

## Editing Content

All editable content lives in `src/data/site.js`. Update your name, role, socials, projects, experience, and skills there. Images can be placed in `src/assets/` and referenced from your data file.

## Common Fixes

- **Unknown at rule `@tailwind`**: Ensure `postcss.config.js` exists and you restarted `npm run dev` after installing dependencies.
- **Cannot find module '@vitejs/plugin-react'**: Run `npm install` to install all dependencies first.
- **Tailwind not applying styles**: Verify the `content` globs in `tailwind.config.js` include `./index.html` and `./src/**/*.{js,jsx,ts,tsx}`.

## Deploy

- **Vercel**: Import the repo and deploy (Framework: Vite).  
- **Netlify**: Build command `npm run build`, publish directory `dist`.  
- **GitHub Pages**: Use `vite` + `gh-pages` or Vercel for simplest DX.
