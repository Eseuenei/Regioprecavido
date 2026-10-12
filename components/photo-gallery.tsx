"use client"

import { useState } from "react"
import { photos, type Category } from "@/lib/photos"
import { GalleryFilters } from "./gallery-filters"
import { MasonryGrid } from "./masonry-grid"
import { Lightbox } from "./lightbox"

export function PhotoGallery() {
  const [category, setCategory] = useState<Category>("Todo")
  const [selected, setSelected] = useState<number | null>(null)

  const visible = category === "Todo" ? photos : photos.filter((p) => p.category === category)

  return (
    <section aria-label="Galería de fotos">
      <GalleryFilters
        active={category}
        onChange={(c) => {
          setCategory(c)
          setSelected(null)
        }}
      />
      <MasonryGrid photos={visible} onSelect={setSelected} />
      <Lightbox photos={visible} index={selected} onClose={() => setSelected(null)} onNavigate={setSelected} />
    </section>
  )
}
