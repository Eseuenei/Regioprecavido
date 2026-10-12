import Image from "next/image"
import type { Photo } from "@/lib/photos"

type Props = {
  photos: Photo[]
  onSelect: (index: number) => void
}

export function MasonryGrid({ photos, onSelect }: Props) {
  if (photos.length === 0) {
    return <p className="py-20 text-center text-sm tracking-widest text-muted uppercase">Sin fotos aquí… todavía.</p>
  }

  return (
    <ul className="columns-1 gap-4 px-4 sm:columns-2 lg:columns-3 xl:columns-4 md:px-8">
      {photos.map((photo, index) => (
        <li key={photo.id} className="mb-4 break-inside-avoid">
          <button
            type="button"
            onClick={() => onSelect(index)}
            className="group relative block w-full overflow-hidden border border-border bg-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
              sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              priority={index < 2}
              className="h-auto w-full transition-transform duration-500 ease-out group-hover:scale-105"
            />
            <span className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-4 pt-12 text-left opacity-100 transition-opacity md:opacity-0 md:group-hover:opacity-100 md:group-focus-visible:opacity-100">
              <span className="font-display text-xl tracking-wide text-foreground uppercase">{photo.title}</span>
              <span className="shrink-0 text-[10px] tracking-[0.25em] text-gold uppercase">{photo.category}</span>
            </span>
          </button>
        </li>
      ))}
    </ul>
  )
}
