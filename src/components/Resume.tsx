import { site } from "@/lib/site";

export function Resume() {
  const hasResume = Boolean(site.resumeUrl);

  return (
    <section id="resume" className="border-t border-border bg-surface py-20">
      <div className="mx-auto max-w-6xl px-6">
        <p className="section-label mb-3">Résumé</p>
        <h2 className="font-serif text-4xl font-semibold text-foreground">
          Theatrical Résumé
        </h2>
        <p className="mt-4 max-w-2xl text-muted">
          Credits, training, special skills, and contact information.
        </p>
        <div className="mt-10 rounded-2xl border border-border bg-background p-8 md:p-12">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="font-serif text-2xl font-semibold">{site.name}</p>
              <p className="mt-1 text-muted">
                {site.tagline} · Age {site.age} · {site.playingAge}
              </p>
              <ul className="mt-4 space-y-1 text-sm text-muted">
                <li>Height: {site.height}</li>
                <li>Location: {site.location}</li>
                <li>Email: {site.email}</li>
                <li>
                  {site.contactLabel}: {site.phone}
                </li>
              </ul>
            </div>
            {hasResume ? (
              <a
                href={site.resumeUrl}
                download="Autumn-Rheault-Resume.pdf"
                className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-light"
              >
                Download Résumé
              </a>
            ) : (
              <span className="inline-flex items-center justify-center rounded-full border border-dashed border-border px-8 py-3 text-sm font-semibold text-muted">
                Available upon request
              </span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
