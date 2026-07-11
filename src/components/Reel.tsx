import {
  getReelEmbedUrl,
  getReelVideoUrl,
  hasReel,
  isEmbedReel,
  reelPoster,
} from "@/lib/reel";
import { site } from "@/lib/site";

export function Reel() {
  const videoUrl = getReelVideoUrl();
  const embedUrl = getReelEmbedUrl();
  const showReel = hasReel();

  return (
    <section id="reel" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <p className="section-label mb-3">Demo Reel</p>
        <h2 className="font-serif text-4xl font-semibold text-foreground">
          Performance Reel
        </h2>
        <p className="mt-4 max-w-2xl text-muted">
          {showReel
            ? "Acting, voice, and dance highlights from recent productions."
            : "Acting, voice, and dance highlights. Contact booking for current footage."}
        </p>
        <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-surface shadow-sm">
          {videoUrl ? (
            <div className="aspect-video bg-black">
              <video
                className="h-full w-full"
                controls
                playsInline
                preload="metadata"
                poster={reelPoster}
                aria-label={`${site.name} demo reel`}
              >
                <source src={videoUrl} type="video/mp4" />
                Your browser does not support embedded video.
              </video>
            </div>
          ) : embedUrl && isEmbedReel(embedUrl) ? (
            <div className="aspect-video">
              <iframe
                src={embedUrl}
                title={`${site.name} demo reel`}
                className="h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ) : (
            <div className="flex aspect-video flex-col items-center justify-center gap-4 bg-[linear-gradient(135deg,#fffdf9_0%,#f3ebe3_100%)] px-6 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-border bg-background">
                <svg
                  aria-hidden
                  className="h-7 w-7 text-accent"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <p className="font-serif text-2xl font-medium text-foreground">
                Demo reel unavailable
              </p>
              <p className="max-w-sm text-sm text-muted">
                Contact {site.email} for current performance footage.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
