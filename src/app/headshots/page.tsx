import type { Metadata } from "next";
import Link from "next/link";
import { PhotoGallery } from "@/components/PhotoGallery";
import { headshots } from "@/lib/headshots";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Headshots — ${site.name}`,
  robots: {
    index: false,
    follow: false,
  },
};

export default function HeadshotsPage() {
  const looks = [...new Set(headshots.map((photo) => photo.look))];

  return (
    <div className="min-h-full bg-background">
      <header className="border-b border-border bg-surface">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <div>
            <p className="font-serif text-xl font-semibold text-foreground">
              {site.name}
            </p>
            <p className="text-sm text-muted">Headshot selects — private gallery</p>
          </div>
          <Link
            href="/"
            className="text-sm font-medium text-muted transition-colors hover:text-accent"
          >
            ← Back to site
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-12">
        <h1 className="font-serif text-4xl font-semibold text-foreground">
          Headshot Gallery
        </h1>
        <p className="mt-4 max-w-2xl text-muted">
          All 18 finished theatrical headshots from the July 2026 session —{" "}
          {looks.join(", ")}.
        </p>

        <PhotoGallery
          photos={headshots}
          aspectClass="aspect-[4/5]"
          viewerLabel="Headshot viewer"
        />
      </main>
    </div>
  );
}
