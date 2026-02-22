# Sparkle & Shine Maid Services — Website

A single-page marketing site for a maid/house cleaning business, built with **Next.js** for SEO and fast loading.

## Tech stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Google Fonts** (Outfit, Fraunces)

## Getting started

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Run the dev server**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000).

3. **Edit content**

   - Update business name, tagline, and contact info in `src/app/page.tsx`.
   - Adjust SEO title/description in `src/app/layout.tsx` (metadata).
   - Replace the placeholder phone number and email in the Contact section with real details.

## Deploy

- **Vercel** (recommended): Connect this repo to [Vercel](https://vercel.com); it will build and deploy automatically.
- Or run `npm run build` and `npm run start` on any Node host.

## Create the GitHub repo

1. [Create a new repository](https://github.com/new) on GitHub (e.g. `maid-services-website`). Do **not** add a README or .gitignore (this project already has them).
2. In the project folder, run:

   ```bash
   git init
   git add .
   git commit -m "Initial commit: Next.js maid services single-page site"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/maid-services-website.git
   git push -u origin main
   ```

   Replace `YOUR_USERNAME` with the GitHub username.

Done. Your friend can now share the repo, deploy to Vercel, and update the copy and contact info as needed.
