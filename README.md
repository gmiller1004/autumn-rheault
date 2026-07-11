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
- `reelEmbedUrl` — optional Vimeo/YouTube embed URL
- `resumeUrl` — path to PDF in `/public` (e.g. `/resume.pdf`)
- Contact email and social links

Replace `/public/headshot.jpg` when updating the primary headshot.

## Demo reel (Vercel Blob — recommended for ~150MB files)

Do **not** commit the MP4 to GitHub (100MB file limit). Host on **Vercel Blob** instead:

1. Install Vercel CLI if needed: `npm i -g vercel`
2. Log in: `vercel login`
3. Link the project (if not already): `vercel link`
4. Upload the reel:

```bash
vercel blob upload /path/to/demo-reel.mp4 --pathname demo-reel.mp4
```

5. Copy the public URL from the command output
6. In the [Vercel project dashboard](https://vercel.com) → **Settings → Environment Variables**, add:

   - **Name:** `NEXT_PUBLIC_REEL_VIDEO_URL`
   - **Value:** the Blob URL (e.g. `https://….public.blob.vercel-storage.com/demo-reel.mp4`)
   - **Environments:** Production, Preview, Development

7. Redeploy (or push any commit to trigger a new deploy)

For local preview, copy `.env.example` to `.env.local` and paste the same URL.

The site uses an HTML5 video player with your title card as the poster image.

## Deploy to Vercel

1. Push this repo to GitHub
2. Import the repo at [vercel.com/new](https://vercel.com/new)
3. Deploy (defaults work for Next.js)
4. Add custom domain `autumnrheault.com` in Vercel → Settings → Domains

## Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4
