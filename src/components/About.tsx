import { site } from "@/lib/site";

export function About() {
  return (
    <section id="about" className="border-t border-border bg-surface py-20">
      <div className="mx-auto max-w-6xl px-6">
        <p className="section-label mb-3">About</p>
        <h2 className="font-serif text-4xl font-semibold text-foreground">
          Training & Credits
        </h2>
        <div className="mt-12 grid gap-12 lg:grid-cols-2">
          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-widest text-accent">
              Training
            </h3>
            <ul className="space-y-5">
              {site.training.map((item) => (
                <li
                  key={item.discipline}
                  className="border-b border-border pb-5 last:border-0"
                >
                  <p className="font-semibold text-foreground">{item.discipline}</p>
                  <p className="mt-1 text-muted">{item.detail}</p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-widest text-accent">
              Selected Credits
            </h3>
            <ul className="space-y-5">
              {site.credits.map((credit) => (
                <li
                  key={`${credit.show}-${credit.year}`}
                  className="border-b border-border pb-5 last:border-0"
                >
                  <p className="font-semibold text-foreground">
                    {credit.show}
                    <span className="font-normal text-muted"> — {credit.role}</span>
                  </p>
                  <p className="mt-1 text-sm text-muted">
                    {credit.venue} · {credit.year}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-14">
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent">
            Special Skills
          </h3>
          <ul className="flex flex-wrap gap-2">
            {site.skills.map((skill) => (
              <li
                key={skill}
                className="rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-foreground"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
