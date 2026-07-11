import { site } from "@/lib/site";

/** Direct MP4/WebM URL (e.g. Vercel Blob). Set in Vercel → Environment Variables. */
export function getReelVideoUrl(): string {
  return process.env.NEXT_PUBLIC_REEL_VIDEO_URL?.trim() ?? "";
}

/** Vimeo/YouTube embed URL. Set in site.ts (preferred over direct MP4). */
export function getReelEmbedUrl(): string {
  const raw = site.reelEmbedUrl?.trim() ?? "";
  return raw ? normalizeEmbedUrl(raw) : "";
}

export function isEmbedReel(url: string): boolean {
  return /youtube\.com|youtu\.be|vimeo\.com|player\.vimeo\.com/.test(url);
}

/** Convert a share link to an embeddable player URL. */
export function normalizeEmbedUrl(url: string): string {
  const vimeoMatch = url.match(/vimeo\.com\/(?:video\/)?(\d+)/);
  if (vimeoMatch) {
    return `https://player.vimeo.com/video/${vimeoMatch[1]}`;
  }

  const youtubeMatch = url.match(
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([\w-]+)/,
  );
  if (youtubeMatch) {
    return `https://www.youtube.com/embed/${youtubeMatch[1]}`;
  }

  return url;
}

export function hasReel(): boolean {
  return Boolean(getReelEmbedUrl() || getReelVideoUrl());
}

export const reelPoster = "/demo-reel-title-card.jpg";
