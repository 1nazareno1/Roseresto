"use client"

import { Dialog, DialogContent, Box, Typography, CardMedia, Chip } from "@mui/material"
import { Flame, Leaf, Wine } from "lucide-react"
import type { MenuItem } from "@/types/menu"

interface ItemDetailModalProps {
  open: boolean
  item: MenuItem | null
  onClose: () => void
}

export default function ItemDetailModal({ open, item, onClose }: ItemDetailModalProps) {
  if (!item) return null

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogContent sx={{ p: 0, maxHeight: "90vh", overflow: "auto" }}>
        <CardMedia
          component="img"
          height="350"
          image={item.image}
          alt={item.name}
          sx={{
            objectFit: "cover",
            bgcolor: "grey.100",
          }}
        />

        <Box sx={{ p: 3 }}>
          {/* Nombre y Precio */}
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", mb: 3, gap: 2 }}>
            <Box sx={{ flex: 1 }}>
              <Typography
                variant="h4"
                component="h2"
                sx={{
                  fontWeight: 700,
                  fontSize: "1.8rem",
                  lineHeight: 1.3,
                  color: "text.primary",
                }}
              >
                {item.name}
              </Typography>
            </Box>
            <Typography
              variant="h4"
              sx={{
                color: "primary.main",
                fontWeight: 700,
                whiteSpace: "nowrap",
              }}
            >
              {item.price}
            </Typography>
          </Box>

          {/* Descripción */}
          <Typography variant="body1" color="text.secondary" sx={{ mb: 3, lineHeight: 1.8, fontSize: "1rem" }}>
            {item.description}
          </Typography>

          {/* Chips */}
          <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
            {item.isVegetarian && (
              <Chip
                icon={<Leaf size={18} />}
                label="Vegetariano"
                sx={{
                  bgcolor: "rgba(76, 175, 80, 0.1)",
                  color: "#4CAF50",
                  fontWeight: 500,
                }}
              />
            )}
            {item.isSpicy && (
              <Chip
                icon={<Flame size={18} />}
                label="Picante"
                sx={{
                  bgcolor: "rgba(255, 87, 34, 0.1)",
                  color: "#FF5722",
                  fontWeight: 500,
                }}
              />
            )}
            {item.isAlcoholic && (
              <Chip
                icon={<Wine size={18} />}
                label="Contiene alcohol"
                sx={{
                  bgcolor: "rgba(128, 0, 128, 0.1)",
                  color: "#800080",
                  fontWeight: 500,
                }}
              />
            )}
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  )
}
