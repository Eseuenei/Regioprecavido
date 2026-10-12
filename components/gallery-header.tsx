export function GalleryHeader({ count }: { count: number }) {
  return (
    <header className="flex flex-col items-center gap-6 px-4 pt-16 pb-10 text-center md:pt-24">
      <div className="flex w-full max-w-md items-center gap-4">
        <span className="h-px flex-1 bg-gold/60" aria-hidden="true" />
        <p className="text-xs tracking-[0.35em] text-gold uppercase">Monterrey · Nuevo León</p>
        <span className="h-px flex-1 bg-gold/60" aria-hidden="true" />
      </div>
      <h1 className="font-display text-6xl leading-none uppercase sm:text-7xl md:text-8xl lg:text-9xl">
        <span className="block text-foreground">La galería</span>
        <span className="block text-gold">regia</span>
      </h1>
      <p className="max-w-md text-sm leading-relaxed tracking-[0.2em] text-gold/90 uppercase">
        Evidencia táctica de la carnita asada
      </p>
      <p className="text-xs tracking-[0.3em] text-muted uppercase">
        {count} archivos · Código regio activado
      </p>
    </header>
  )
}
