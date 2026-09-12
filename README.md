# 🎓 IDEAS KRMU

> **Innovate. Dream. Express. Achieve. Shine.**
> The official web platform for the **IDEAS** cultural & technical fest at **K.R. Mangalam University (KRMU)**.

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/piyushs-projects-1d621cde/v0-ideaskrmumain)
[![Built with Next.js](https://img.shields.io/badge/Built%20with-Next.js%2015-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

---

## 📖 Table of Contents

- [About the Project](#-about-the-project)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Prerequisites](#-prerequisites)
- [How to Run Locally](#-how-to-run-locally)
- [Building for Production](#-building-for-production)
- [Deployment](#-deployment)
- [Important Notes](#-important-notes)
- [Contributing](#-contributing)

---

## 🌟 About the Project

**IDEAS KRMU** is a modern web platform built to showcase events, performances, showcases, and spotlights from the IDEAS cultural & technical fest at K.R. Mangalam University.

### Key Sections

| Section | Description |
|---|---|
| 🏠 Home | Landing page with highlights |
| 📅 Events | Browse all upcoming & past events |
| 🎭 Cultural | Cultural events listing |
| 🎤 Live Performances | Live stage performance details |
| 💡 IDEAS | Core IDEAS festival info |
| 🏆 Showcase | Student project showcases |
| 🌟 Spotlight | Featured participants & winners |
| 📝 Register | Event registration form |
| 📞 Contact | Contact information & queries |

---

## 🛠 Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| [Next.js](https://nextjs.org/) | 15.2.4 | React framework (App Router) |
| [React](https://react.dev/) | 19 | UI library |
| [TypeScript](https://www.typescriptlang.org/) | 5 | Type safety |
| [Tailwind CSS](https://tailwindcss.com/) | 3.4 | Utility-first CSS styling |
| [Radix UI](https://www.radix-ui.com/) | latest | Accessible UI primitives |
| [Framer Motion](https://www.framer.com/motion/) | latest | Animations |
| [Lucide React](https://lucide.dev/) | latest | Icon library |
| [shadcn/ui](https://ui.shadcn.com/) | latest | Pre-built UI components |
| [React Hook Form](https://react-hook-form.com/) | latest | Form handling |
| [Zod](https://zod.dev/) | latest | Schema validation |
| [pnpm](https://pnpm.io/) | latest | Package manager |

---

## 📂 Project Structure

```
ideas-krmu/
├── app/                        # Next.js App Router pages
│   ├── page.tsx                # Home page
│   ├── layout.tsx              # Root layout with metadata
│   ├── globals.css             # Global styles
│   ├── events/                 # Events page
│   ├── all-events/             # All events listing
│   ├── cultural/               # Cultural events
│   ├── live-performances/      # Live performances
│   ├── ideas/                  # IDEAS section
│   ├── showcase/               # Showcase gallery
│   ├── spotlight/              # Spotlight section
│   ├── register/               # Registration form
│   ├── contact/                # Contact page
│   └── not-found.tsx           # 404 page
├── components/                 # Reusable React components
├── hooks/                      # Custom React hooks
├── lib/                        # Utility functions & helpers
├── public/                     # Static assets (images, icons)
├── styles/                     # Additional stylesheets
├── scripts/                    # Build & utility scripts
├── Pic/                        # Image assets for the site
├── next.config.mjs             # Next.js configuration
├── tailwind.config.ts          # Tailwind CSS configuration
├── tsconfig.json               # TypeScript configuration
├── components.json             # shadcn/ui component config
└── package.json                # Project dependencies & scripts
```

---

## ✅ Prerequisites

Make sure you have the following installed before running the project:

- **Node.js** `v18.x` or higher → [Download](https://nodejs.org/)
- **pnpm** `v8.x` or higher (recommended package manager)

  ```bash
  npm install -g pnpm
  ```

- **Git** → [Download](https://git-scm.com/)

> ⚠️ This project uses **pnpm** as the package manager. Using `npm` or `yarn` may cause dependency resolution issues due to the `pnpm-lock.yaml` lockfile.

---

## 🚀 How to Run Locally

### Step 1 — Clone the Repository

```bash
git clone https://github.com/ScienHAC/ideas-krmu.git
cd ideas-krmu
```

### Step 2 — Install Dependencies

```bash
pnpm install
```

> If you don't have `pnpm`, install it first:
> ```bash
> npm install -g pnpm
> ```

### Step 3 — Start the Development Server

```bash
pnpm dev
```

The app will be live at **[http://localhost:3000](http://localhost:3000)** 🎉

### Step 4 — Open in Browser

Navigate to `http://localhost:3000` in your browser. Hot-reloading is enabled — any changes you make to source files will automatically refresh the browser.

---

## 🏗 Building for Production

### Build the Static Export

```bash
pnpm build
```

This runs `pnpm clean` (removes `.next/` and `out/` directories) followed by `next build`.

The output is exported as **static HTML** in the `out/` directory (configured via `output: 'export'` in `next.config.mjs`).

### Preview the Production Build

After building, you can preview the static output using any static server:

```bash
npx serve out
```

### Available Scripts

| Command | Description |
|---|---|
| `pnpm dev` | Start development server with hot reload |
| `pnpm build` | Build the production static export |
| `pnpm start` | Start the Next.js production server |
| `pnpm lint` | Run ESLint to check code quality |
| `pnpm clean` | Remove `.next/` and `out/` build directories |
| `pnpm deploy` | Deploy to GitHub Pages (via `gh-pages`) |

---

## 🌐 Deployment

### Vercel (Primary Deployment)

The project is **live on Vercel** at:

**🔗 [https://vercel.com/piyushs-projects-1d621cde/v0-ideaskrmumain](https://vercel.com/piyushs-projects-1d621cde/v0-ideaskrmumain)**

Any push to the `main` branch automatically triggers a new deployment on Vercel.

### GitHub Pages (Alternative)

To deploy to GitHub Pages:

```bash
pnpm deploy
```

This runs `next build` and publishes the `out/` folder via `gh-pages`.

### cPanel / Shared Hosting

Since the project is configured with `output: 'export'` in `next.config.mjs`, it generates a fully **static site**:

1. Run `pnpm build` to generate the `out/` directory.
2. Upload the contents of `out/` to your hosting's `public_html` folder via FTP or cPanel File Manager.
3. The site will work without a Node.js server.

---

## ⚠️ Important Notes

### 1. Static Export Mode

The project is configured for **static export** (`output: 'export'`). This means:
- **No server-side rendering (SSR)** at runtime.
- **No API Routes** — Next.js API routes are not supported in static export mode.
- All pages are pre-rendered to static HTML at build time.

### 2. Image Optimization

- Next.js Image Optimization is **disabled** (`unoptimized: true`) to support static export.
- Use standard `<img>` tags or Next.js `<Image>` with the `unoptimized` prop.
- Refer to [`IMAGE_REQUIREMENTS.md`](./IMAGE_REQUIREMENTS.md) and [`IMAGE_CONVERSION_GUIDE.md`](./IMAGE_CONVERSION_GUIDE.md) for image best practices.

### 3. TypeScript & ESLint

- TypeScript build errors are **intentionally ignored** during builds (`ignoreBuildErrors: true`).
- ESLint errors are also **ignored during builds** (`ignoreDuringBuilds: true`).
- This is for CI/CD flexibility — always fix errors locally using `pnpm lint`.

### 4. Package Manager

- **Always use `pnpm`**. Do not mix with `npm` or `yarn`.
- The lockfile `pnpm-lock.yaml` must be committed and kept in sync.

### 5. React Strict Mode

- `reactStrictMode` is set to `false` in `next.config.mjs` to avoid double-renders in development that could cause UI side effects.

### 6. Additional Documentation

The repository includes several guide files for specific topics:

| File | Topic |
|---|---|
| [`COMPONENT_GUIDELINES.md`](./COMPONENT_GUIDELINES.md) | Component coding standards |
| [`DESIGN_SYSTEM.md`](./DESIGN_SYSTEM.md) | Design tokens & system |
| [`ROUTING_GUIDE.md`](./ROUTING_GUIDE.md) | Page routing structure |
| [`OPTIMIZATION_GUIDE.md`](./OPTIMIZATION_GUIDE.md) | Performance optimization tips |
| [`MOBILE_OPTIMIZATION_GUIDE.md`](./MOBILE_OPTIMIZATION_GUIDE.md) | Mobile-specific optimizations |
| [`LAZY_LOADING_GUIDE.md`](./LAZY_LOADING_GUIDE.md) | Lazy loading implementation |
| [`DEPLOYMENT_CHECKLIST.md`](./DEPLOYMENT_CHECKLIST.md) | Pre-deployment checklist |
| [`FIXES_APPLIED.md`](./FIXES_APPLIED.md) | Changelog of applied fixes |

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m "feat: add your feature"`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Open a **Pull Request**

---

## 📄 License

This project is maintained by the **IDEAS KRMU** team at K.R. Mangalam University.

---

<div align="center">
  Made with ❤️ for <strong>K.R. Mangalam University</strong>
</div>
#   i d e a s  
 