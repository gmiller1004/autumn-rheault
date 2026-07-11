import { site } from "@/lib/site";

export function Reel() {
  const hasReel = Boolean(site.reelUrl);

  return (
    <section id="reel" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <p className="section-label mb-3">Demo Reel</p>
        <h2 className="font-serif text-4xl font-semibold text-foreground">
          Performance Reel
        </h2>
        <p className="mt-4 max-w-2xl text-muted">
          A showcase of acting, singing, and dance. Updated reel coming soon.
        </p>
        <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-surface shadow-sm">
          {hasReel ? (
            <div className="aspect-video">
              <iframe
                src={site.reelUrl}
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
                Demo reel coming soon
              </p>
              <p className="max-w-sm text-sm text-muted">
                Check back for clips from recent performances, or contact us for
                current materials.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
