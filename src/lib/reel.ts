import { site } from "@/lib/site";

/** Direct MP4/WebM URL (e.g. Vercel Blob). Set in Vercel → Environment Variables. */
export function getReelVideoUrl(): string {
  return process.env.NEXT_PUBLIC_REEL_VIDEO_URL?.trim() ?? "";
}

/** Vimeo/YouTube embed URL. Optional fallback in site config. */
export function getReelEmbedUrl(): string {
  return site.reelEmbedUrl?.trim() ?? "";
}

export function isEmbedReel(url: string): boolean {
  return /youtube\.com|youtu\.be|vimeo\.com|player\.vimeo\.com/.test(url);
}

export function hasReel(): boolean {
  return Boolean(getReelVideoUrl() || getReelEmbedUrl());
}

export const reelPoster = "/demo-reel-title-card.jpg";
