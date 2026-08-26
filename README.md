# Manan Sharma — Technical Portfolio & Systems Archive

> High-performance personal portfolio, research archive, and engineering system built with **React 19**, **TypeScript**, **Vite 6**, and **Tailwind CSS**. Optimized for deployment on **Cloudflare Pages**.

---

## ⚡ Tech Stack

- **Framework**: React 19 + TypeScript
- **Bundler**: Vite 6
- **Styling**: Tailwind CSS (Custom Vintage Retro Analog & Parchment Palette)
- **Icons**: Lucide React
- **Hosting**: Cloudflare Pages / Cloudflare Workers Static Assets
- **Form Delivery**: Web3Forms with graceful mailto fallback

---

## 🚀 Quick Start (Local Development)

```bash
# 1. Clone the repository
git clone https://github.com/manan316/portfolio.git
cd portfolio

# 2. Install dependencies
npm install

# 3. Create .env file
cp .env.example .env
# Add your VITE_WEB3FORMS_ACCESS_KEY if you want direct email delivery

# 4. Start local development server
npm run dev
```

Visit `http://localhost:5173/` in your browser.

---

## ☁️ Cloudflare Pages Publishing

### Option 1: Git Integration (Recommended)
1. Push this repository to **GitHub** or **GitLab**.
2. Go to the [Cloudflare Dashboard](https://dash.cloudflare.com/) > **Compute (Workers & Pages)** > **Pages** > **Connect to Git**.
3. Select this repository and set the following build settings:
   - **Framework preset**: `Vite`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Environment variables**:
     - `VITE_WEB3FORMS_ACCESS_KEY`: *(Optional)* Your Web3Forms Access Key
4. Click **Save and Deploy**.

### Option 2: Direct CLI Deployment (Wrangler)
You can deploy directly to Cloudflare Pages from your terminal using `wrangler`:

```bash
# 1. Build the production bundle
npm run build

# 2. Deploy to Cloudflare Pages
npx wrangler pages deploy dist --project-name=manan-sharma-portfolio
```

---

## 📁 Repository Structure

```
├── public/
│   ├── _headers            # Cloudflare Pages security & immutable cache headers
│   ├── _redirects          # SPA client-side routing fallback (/* -> /index.html 200)
│   ├── robots.txt          # Search engine crawler policies
│   ├── sitemap.xml         # SEO sitemap
│   ├── Resume.pdf          # Verified resume asset
│   └── images/             # Technical screenshots and diagram assets
├── src/
│   ├── components/         # Modular UI sectors (Hero, About, Projects, etc.)
│   ├── data/               # Structured portfolio data matrix (portfolioData.ts)
│   ├── hooks/              # Custom React hooks (scroll reveal, counters)
│   ├── types/              # TypeScript interface definitions
│   ├── App.tsx             # Root application assembly
│   ├── index.css           # Custom theme variables & tactical styling
│   └── main.tsx            # Application entry point
├── package.json            # Scripts and dependencies
├── tailwind.config.js      # Tailored color system and typography tokens
├── tsconfig.json           # TypeScript configuration
├── vite.config.ts          # Vite build configuration
└── wrangler.toml           # Cloudflare Pages deployment configuration
```

---

## 🔒 Security & Performance Features

- **Immutable Caching**: Automated `Cache-Control: immutable` headers for all Vite-hashed assets (`/assets/*`).
- **Security Headers**: Built-in `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, and `Permissions-Policy`.
- **Zero Heavy Runtime**: Fully tree-shaken static bundle with instant Time-to-First-Byte (TTFB) on Cloudflare's global edge network.

---

## 📄 License

MIT © [Manan Sharma](https://github.com/manan316)
