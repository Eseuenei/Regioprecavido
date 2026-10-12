import { GalleryHeader } from "@/components/gallery-header"
import { PhotoGallery } from "@/components/photo-gallery"
import { photos } from "@/lib/photos"

export default function Page() {
  return (
    <main className="mx-auto min-h-dvh max-w-[1600px] pb-20">
      <GalleryHeader count={photos.length} />
      <PhotoGallery />
      <footer className="mt-16 flex flex-col items-center gap-2 px-4 text-center">
        <span className="h-px w-40 bg-gold/50" aria-hidden="true" />
        <p className="pt-4 text-sm tracking-[0.15em] text-foreground">regioprecavido.com</p>
        <p className="text-[10px] tracking-[0.3em] text-muted uppercase">Beta v1.0 · ULS</p>
      </footer>
    </main>
  )
}
