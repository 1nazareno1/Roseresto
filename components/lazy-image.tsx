"use client"

import { Box } from "@mui/material"

interface LazyImageProps {
  src: string
  alt: string
  height?: number | string
  width?: number | string
  style?: React.CSSProperties
  sx?: any
}

export default function LazyImage({ src, alt, height = 160, width = "100%", style, sx }: LazyImageProps) {
  return (
    <Box sx={{ position: "relative", width, height, overflow: "hidden", bgcolor: "grey.100", ...sx }}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          ...style,
        }}
      />
    </Box>
  )
}
