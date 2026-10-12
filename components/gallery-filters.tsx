import { categories, type Category } from "@/lib/photos"

type Props = {
  active: Category
  onChange: (category: Category) => void
}

export function GalleryFilters({ active, onChange }: Props) {
  return (
    <nav aria-label="Filtrar fotos por categoría" className="px-4 pb-10">
      <ul className="flex flex-wrap justify-center gap-2">
        {categories.map((category) => {
          const isActive = category === active
          return (
            <li key={category}>
              <button
                type="button"
                onClick={() => onChange(category)}
                aria-pressed={isActive}
                className={`border px-4 py-2 text-xs tracking-[0.25em] uppercase transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold ${
                  isActive
                    ? "border-gold bg-gold text-background"
                    : "border-border text-muted hover:border-gold/60 hover:text-gold"
                }`}
              >
                {category}
              </button>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
