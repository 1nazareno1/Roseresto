import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { MuiThemeProvider } from "@/components/mui-theme-provider"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "RoseResto - Menú Digital",
  description: "Menú digital del restaurante RoseResto",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/layout-Rose.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/layout-Rose.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/layout-Rose.png",
        type: "image/svg+xml",
      },
    ],
    apple: "/layout-Rose.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`font-sans antialiased`}>
        <MuiThemeProvider>{children}</MuiThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
