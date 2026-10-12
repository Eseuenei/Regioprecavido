export const categories = ["Todo", "Parrilla", "La banda", "Monterrey"] as const
export type Category = (typeof categories)[number]

export type Photo = {
  id: string
  src: string
  width: number
  height: number
  title: string
  alt: string
  category: Exclude<Category, "Todo">
}

export const photos: Photo[] = [
  {
    id: "poster",
    src: "/gallery/poster.jpg",
    width: 784,
    height: 1168,
    title: "¿Se va a hacer?",
    alt: "Póster negro y dorado: ¿Se va a hacer? La calculadora táctica de la carnita asada, Monterrey, Nuevo León",
    category: "Monterrey",
  },
  {
    id: "arrachera",
    src: "/gallery/arrachera.png",
    width: 1024,
    height: 1024,
    title: "Arrachera al carbón",
    alt: "Arrachera chisporroteando sobre la parrilla con brasas encendidas",
    category: "Parrilla",
  },
  {
    id: "cerro-silla",
    src: "/gallery/cerro-silla.png",
    width: 1376,
    height: 768,
    title: "Cerro de la Silla",
    alt: "Silueta del Cerro de la Silla al atardecer con cielo dorado",
    category: "Monterrey",
  },
  {
    id: "carbon",
    src: "/gallery/carbon.png",
    width: 848,
    height: 1264,
    title: "Brasas listas",
    alt: "Carbón al rojo vivo con chispas elevándose en la oscuridad",
    category: "Parrilla",
  },
  {
    id: "la-banda",
    src: "/gallery/la-banda.png",
    width: 1264,
    height: 848,
    title: "La banda completa",
    alt: "Grupo de amigos reunidos de noche alrededor del asador con luces colgantes",
    category: "La banda",
  },
  {
    id: "tortillas",
    src: "/gallery/tortillas.png",
    width: 896,
    height: 1200,
    title: "Tortillas de harina",
    alt: "Tortillas de harina calentándose junto a cebollas y jalapeños asados",
    category: "Parrilla",
  },
  {
    id: "hielera",
    src: "/gallery/hielera.png",
    width: 848,
    height: 1264,
    title: "La hielera",
    alt: "Hielera llena de botellas de cerveza ámbar con hielo",
    category: "La banda",
  },
  {
    id: "salsa",
    src: "/gallery/salsa.png",
    width: 1024,
    height: 1024,
    title: "Salsa de molcajete",
    alt: "Molcajete con salsa roja asada, tomates y chiles tatemados",
    category: "Parrilla",
  },
  {
    id: "chorizo",
    src: "/gallery/chorizo.png",
    width: 1200,
    height: 896,
    title: "Chorizo y cebollitas",
    alt: "Chorizo y cebollitas asándose sobre el carbón con flamas",
    category: "Parrilla",
  },
]
