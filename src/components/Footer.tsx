import { site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-muted md:flex-row">
        <p>
          © {year} {site.name}. All rights reserved.
        </p>
        <p className="text-center md:text-right">
          Youth performer · Acting · Voice · Dance
        </p>
      </div>
    </footer>
  );
}
