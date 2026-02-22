# So Many Roses Maid Services

Marketing site for **So Many Roses Maid Services LLC**, a professional cleaning company in the Denver, Colorado area.

## Stack

- **Next.js** (App Router) — React framework, static export for hosting
- **TypeScript** — Typed JavaScript
- **Tailwind CSS** — Styling
- **EmailJS** — Contact form submissions (no backend; emails sent from the client via EmailJS)
- **AOS** — Scroll animations
- **hamburger-react** — Mobile menu icon

The site is built as a **static export** (SSG) and deployed to **GitHub Pages**. Each push to `main` triggers a GitHub Action that builds and deploys the site.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Contact form (EmailJS)

The contact form uses [EmailJS](https://www.emailjs.com/). To run it locally or for the deployed site to send mail, set these in `.env.local` (local) or as repository secrets (GitHub Actions):

- `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
- `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
- `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`

See [EmailJS](https://www.emailjs.com/docs/) for setup. Do not commit `.env.local`; it is gitignored.

## Build

```bash
npm run build
```

Output is in the `out/` directory (static files for any static host).

## License

Private. All rights reserved.
