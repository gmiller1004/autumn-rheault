import { site } from "@/lib/site";

export function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <p className="section-label mb-3">Contact</p>
        <h2 className="font-serif text-4xl font-semibold text-foreground">
          Booking & Inquiries
        </h2>
        <p className="mt-4 max-w-2xl text-muted">
          For auditions, casting inquiries, and representation, please use the
          booking email below or contact {site.contactLabel.toLowerCase()} by
          phone.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <a
            href={`mailto:${site.email}`}
            className="group rounded-2xl border border-border bg-surface p-8 transition-colors hover:border-accent/30"
          >
            <p className="section-label mb-2">Booking</p>
            <p className="text-sm text-muted">Email</p>
            <p className="mt-1 text-lg font-semibold text-foreground group-hover:text-accent">
              {site.email}
            </p>
          </a>
          <a
            href={`tel:${site.phone.replace(/-/g, "")}`}
            className="group rounded-2xl border border-border bg-surface p-8 transition-colors hover:border-accent/30"
          >
            <p className="section-label mb-2">{site.contactLabel}</p>
            <p className="text-sm text-muted">Phone</p>
            <p className="mt-1 text-lg font-semibold text-foreground group-hover:text-accent">
              {site.phone}
            </p>
          </a>
          <div className="rounded-2xl border border-border bg-surface p-8">
            <p className="section-label mb-2">Social</p>
            <ul className="space-y-2 text-sm">
              <li>
                <span className="text-muted">Instagram: </span>
                <span className="font-medium">
                  {site.social.instagram || "[Coming soon]"}
                </span>
              </li>
              <li>
                <span className="text-muted">YouTube: </span>
                <span className="font-medium">
                  {site.social.youtube || "[Coming soon]"}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
