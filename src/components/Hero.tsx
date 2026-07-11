import Image from "next/image";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(124,45,54,0.08),_transparent_55%)]" />
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-2 md:items-center md:py-24">
        <div className="order-2 md:order-1">
          <p className="section-label mb-4">{site.tagline}</p>
          <h1 className="font-serif text-5xl font-semibold leading-tight text-foreground md:text-6xl lg:text-7xl">
            {site.name}
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
            {site.bio}
          </p>
          <dl className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm">
            <div>
              <dt className="section-label mb-1">Age</dt>
              <dd className="font-medium">
                {site.age} · {site.playingAge}
              </dd>
            </div>
            <div>
              <dt className="section-label mb-1">Height</dt>
              <dd className="font-medium">{site.height}</dd>
            </div>
            <div>
              <dt className="section-label mb-1">Based In</dt>
              <dd className="font-medium">{site.location}</dd>
            </div>
          </dl>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#reel"
              className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-light"
            >
              Watch Reel
            </a>
            <a
              href="#resume"
              className="rounded-full border border-border bg-surface px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent/30"
            >
              View Résumé
            </a>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <div className="relative mx-auto aspect-[4/5] max-w-md overflow-hidden rounded-2xl border border-border bg-surface shadow-[0_24px_60px_-20px_rgba(28,25,23,0.25)]">
            <Image
              src="/headshot.jpg"
              alt={`${site.name} — theatrical headshot`}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 480px"
              className="object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
