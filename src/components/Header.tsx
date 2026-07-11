import { navItems, site } from "@/lib/site";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#"
          className="font-serif text-xl font-semibold tracking-wide text-foreground"
        >
          {site.name}
        </a>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted transition-colors hover:text-accent"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="#reel"
          className="rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-accent-light"
        >
          Watch Reel
        </a>
      </div>
    </header>
  );
}
