"use client"

import { CldImage } from "next-cloudinary"
import { Box } from "@mui/material"

interface LazyImageProps {
  src: string
  alt: string
  height?: number | string
  width?: number | string
  style?: React.CSSProperties
  sx?: any
  objectFit?: "cover" | "contain" | "fill" | "scale-down"
  priority?: boolean
}

export default function LazyImage({ src, alt, height = 160, width = "100%", style, sx, objectFit = "cover", priority = false }: LazyImageProps) {
  // Si es una URL completa de Cloudinary, usarla directamente
  if (src.startsWith("https://res.cloudinary.com")) {
    return (
      <Box sx={{ position: "relative", width, height, overflow: "hidden", bgcolor: "grey.100", ...sx }}>
        <img
          src={src}
          alt={alt}
          loading={ priority ? "eager" : "lazy" }
          style={{
            width: "100%",
            height: "100%",
            objectFit: objectFit,
            ...style,
          }}
        />
      </Box>
    )
  }

  // Si es una ruta local, convertir a public_id de Cloudinary
  let cloudinaryPath = src.startsWith("/") ? src.slice(1) : src
  
  // Extraer la categoría y el nombre del archivo
  const parts = cloudinaryPath.split("/")
  if (parts.length > 1) {
    const category = parts[0]
    const fileName = parts[parts.length - 1]
    // Remover extensión
    const nameWithoutExt = fileName.split(".")[0]
    cloudinaryPath = `${category}/${category}/${nameWithoutExt}`
  }

  return (
    <Box sx={{ position: "relative", width, height, overflow: "hidden", bgcolor: "grey.100", ...sx }}>
      <CldImage
        src={cloudinaryPath}
        alt={alt}
        fill
        sizes="(max-width: 640px) 100vw, 50vw"
        quality="auto"
        priority={priority}
        loading={priority ? "eager" : "lazy"}
        style={{
          objectFit: objectFit,
          ...style,
        }}
      />
    </Box>
  )
}
