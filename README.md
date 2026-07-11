# Autumn Rheault — Official Website

Next.js portfolio site for youth triple-threat performer Autumn Rheault.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Updating content

Edit placeholders in [`src/lib/site.ts`](src/lib/site.ts):

- Bio, age, height, location
- Training, credits, skills
- `reelUrl` — Vimeo/YouTube embed URL
- `resumeUrl` — path to PDF in `/public` (e.g. `/resume.pdf`)
- Contact email and social links

Replace `/public/headshot.jpg` when updating the primary headshot.

## Deploy to Vercel

1. Push this repo to GitHub
2. Import the repo at [vercel.com/new](https://vercel.com/new)
3. Deploy (defaults work for Next.js)
4. Add custom domain `autumnrheault.com` in Vercel → Settings → Domains

## Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4
