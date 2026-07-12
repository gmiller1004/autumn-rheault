"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

export type GalleryPhoto = {
  src: string;
  alt: string;
};

type PhotoGalleryProps = {
  photos: readonly GalleryPhoto[];
  aspectClass?: string;
  gridClassName?: string;
  viewerLabel?: string;
};

export function PhotoGallery({
  photos,
  aspectClass = "aspect-[3/4]",
  gridClassName = "mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 lg:gap-4",
  viewerLabel = "Photo viewer",
}: PhotoGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = useCallback(() => setActiveIndex(null), []);

  const showPrev = useCallback(() => {
    setActiveIndex((current) =>
      current === null
        ? null
        : (current - 1 + photos.length) % photos.length,
    );
  }, [photos.length]);

  const showNext = useCallback(() => {
    setActiveIndex((current) =>
      current === null ? null : (current + 1) % photos.length,
    );
  }, [photos.length]);

  useEffect(() => {
    if (activeIndex === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowLeft") showPrev();
      if (event.key === "ArrowRight") showNext();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeIndex, close, showNext, showPrev]);

  const activePhoto = activeIndex === null ? null : photos[activeIndex];

  return (
    <>
      <ul className={gridClassName}>
        {photos.map((photo, index) => (
          <li key={photo.src}>
            <button
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`group relative ${aspectClass} w-full overflow-hidden rounded-xl border border-border bg-surface focus:outline-none focus-visible:ring-2 focus-visible:ring-accent`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
              />
            </button>
          </li>
        ))}
      </ul>

      {activePhoto && activeIndex !== null ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={viewerLabel}
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            className="absolute right-4 top-4 rounded-full bg-white/10 px-3 py-1 text-sm font-medium text-white backdrop-blur hover:bg-white/20"
          >
            Close
          </button>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showPrev();
            }}
            className="absolute left-3 top-1/2 hidden -translate-y-1/2 rounded-full bg-white/10 px-3 py-2 text-white backdrop-blur hover:bg-white/20 sm:block"
            aria-label="Previous photo"
          >
            ←
          </button>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
            className="absolute right-3 top-1/2 hidden -translate-y-1/2 rounded-full bg-white/10 px-3 py-2 text-white backdrop-blur hover:bg-white/20 sm:block"
            aria-label="Next photo"
          >
            →
          </button>
          <div
            className="relative h-[min(85vh,900px)] w-full max-w-3xl"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={activePhoto.src}
              alt={activePhoto.alt}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
          </div>
        </div>
      ) : null}
    </>
  );
}
