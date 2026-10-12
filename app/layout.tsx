import type { Metadata, Viewport } from "next"
import { Anton, JetBrains_Mono } from "next/font/google"
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css"

const anton = Anton({ weight: "400", subsets: ["latin"], variable: "--font-anton" })
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains" })

export const metadata: Metadata = {
  title: "Galería · ¿Se va a hacer? | Regio Precavido",
  description:
    "Galería de la carnita asada regia: parrilla, la banda y Monterrey. Calculadora táctica de la carnita asada.",
}

export const viewport: Viewport = {
  themeColor: "#0b0b0a",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-MX" className={`${anton.variable} ${jetbrains.variable}`}>
      <body className="antialiased">
        {children}
        <SpeedInsights />
      </body>
    </html>
  )
}
