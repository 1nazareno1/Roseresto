"use client"

import { Dialog, DialogContent, Box, Typography, Chip, IconButton } from "@mui/material"
import { Flame, Leaf, Wine, ChevronLeft } from "lucide-react"
import { useEffect } from "react"
import LazyImage from "./lazy-image"
import type { MenuItem } from "@/types/menu"

interface ItemDetailModalProps {
  open: boolean
  item: MenuItem | null
  onClose: () => void
}

export default function ItemDetailModal({ open, item, onClose }: ItemDetailModalProps) {
  // Manejo del botón atrás del navegador/celular
  useEffect(() => {
    if (!open) return

    // Añadir un estado al historial cuando el modal se abre
    window.history.pushState({ modalOpen: true }, "")

    // Escuchar el evento popstate cuando el usuario presiona atrás
    const handlePopState = (event: PopStateEvent) => {
      if (event.state?.modalOpen) {
        onClose()
      }
    }

    window.addEventListener("popstate", handlePopState)

    return () => {
      window.removeEventListener("popstate", handlePopState)
    }
  }, [open, onClose])

  if (!item) return null

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogContent sx={{ p: 0, maxHeight: "90vh", overflow: "auto", position: "relative" }}>
        {/* Botón Atrás */}
        <Box sx={{ position: "absolute", top: 8, left: 8, zIndex: 10 }}>
          <IconButton
            onClick={onClose}
            sx={{
              bgcolor: "rgba(255, 255, 255, 0.9)",
              "&:hover": {
                bgcolor: "rgba(255, 255, 255, 1)",
              },
            }}
          >
            <ChevronLeft size={24} color="#333" />
          </IconButton>
        </Box>

        <LazyImage src={item.image} alt={item.name} height={280} />

        <Box sx={{ p: 2 }}>
          {/* Nombre y Precio */}
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", mb: 2, gap: 1 }}>
            <Box sx={{ flex: 1, minWidth: 0 }}>
              <Typography
                variant="h4"
                component="h2"
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: "1.4rem", sm: "1.6rem" },
                  lineHeight: 1.2,
                  color: "text.primary",
                  wordBreak: "break-word",
                }}
              >
                {item.name}
              </Typography>
            </Box>
            <Typography
              variant="h5"
              sx={{
                color: "primary.main",
                fontWeight: 700,
                fontSize: { xs: "1.1rem", sm: "1.3rem" },
                whiteSpace: "nowrap",
                flexShrink: 0,
              }}
            >
              {item.price}
            </Typography>
          </Box>

          {/* Descripción */}
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              mb: 2,
              lineHeight: 1.6,
              fontSize: { xs: "0.9rem", sm: "1rem" },
            }}
          >
            {item.description}
          </Typography>

          {/* Chips */}
          <Box sx={{ display: "flex", gap: 0.5, flexWrap: "wrap" }}>
            {item.isVegetarian && (
              <Chip
                icon={<Leaf size={16} />}
                label="Vegetariano"
                sx={{
                  bgcolor: "rgba(76, 175, 80, 0.1)",
                  color: "#4CAF50",
                  fontWeight: 500,
                  fontSize: "0.8rem",
                }}
              />
            )}
            {item.isSpicy && (
              <Chip
                icon={<Flame size={16} />}
                label="Picante"
                sx={{
                  bgcolor: "rgba(255, 87, 34, 0.1)",
                  color: "#FF5722",
                  fontWeight: 500,
                  fontSize: "0.8rem",
                }}
              />
            )}
            {item.isAlcoholic && (
              <Chip
                icon={<Wine size={16} />}
                label="Contiene alcohol"
                sx={{
                  bgcolor: "rgba(128, 0, 128, 0.1)",
                  color: "#800080",
                  fontWeight: 500,
                  fontSize: "0.8rem",
                }}
              />
            )}
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  )
}
