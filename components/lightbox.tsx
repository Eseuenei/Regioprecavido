"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import type { Photo } from "@/lib/photos"

type Props = {
  photos: Photo[]
  index: number | null
  onClose: () => void
  onNavigate: (index: number) => void
}

export function Lightbox({ photos, index, onClose, onNavigate }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const photo = index !== null ? photos[index] : null

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (photo && !dialog.open) dialog.showModal()
    if (!photo && dialog.open) dialog.close()
  }, [photo])

  const go = (step: number) => {
    if (index === null) return
    onNavigate((index + step + photos.length) % photos.length)
  }

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      onClick={(e) => e.target === e.currentTarget && onClose()}
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") go(1)
        if (e.key === "ArrowLeft") go(-1)
      }}
      aria-label={photo?.title ?? "Visor de fotos"}
      className="m-auto max-h-none max-w-none bg-transparent p-0 text-foreground"
    >
      {photo && (
        <div className="flex h-dvh w-screen flex-col items-center justify-center gap-4 p-4 md:p-10" onClick={(e) => e.target === e.currentTarget && onClose()}>
          <div className="flex w-full max-w-5xl items-center justify-between gap-4">
            <p className="text-xs tracking-[0.3em] text-gold uppercase">
              {String(index! + 1).padStart(2, "0")} / {String(photos.length).padStart(2, "0")} · {photo.category}
            </p>
            <button
              type="button"
              onClick={onClose}
              className="border border-border p-2 text-foreground transition-colors hover:border-gold hover:text-gold focus-visible:outline-2 focus-visible:outline-gold"
            >
              <X className="size-5" aria-hidden="true" />
              <span className="sr-only">Cerrar</span>
            </button>
          </div>

          <div className="relative flex min-h-0 w-full max-w-5xl flex-1 items-center justify-center">
            <Image
              key={photo.id}
              src={photo.src}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
              sizes="100vw"
              className="max-h-full w-auto object-contain"
            />
          </div>

          <div className="flex w-full max-w-5xl items-center justify-between gap-4">
            <button
              type="button"
              onClick={() => go(-1)}
              className="border border-border p-3 transition-colors hover:border-gold hover:text-gold focus-visible:outline-2 focus-visible:outline-gold"
            >
              <ChevronLeft className="size-5" aria-hidden="true" />
              <span className="sr-only">Foto anterior</span>
            </button>
            <h2 className="font-display text-2xl text-center uppercase md:text-4xl">{photo.title}</h2>
            <button
              type="button"
              onClick={() => go(1)}
              className="border border-border p-3 transition-colors hover:border-gold hover:text-gold focus-visible:outline-2 focus-visible:outline-gold"
            >
              <ChevronRight className="size-5" aria-hidden="true" />
              <span className="sr-only">Foto siguiente</span>
            </button>
          </div>
        </div>
      )}
    </dialog>
  )
}
