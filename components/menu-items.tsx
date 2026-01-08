"use client"

import { useState } from "react"
import { Grid, Card, CardContent, Typography, Box, Chip } from "@mui/material"
import { Flame, Leaf, Wine } from "lucide-react"
import ItemDetailModal from "./item-detail-modal"
import LazyImage from "./lazy-image"
import type { MenuItem } from "@/types/menu"

interface MenuItemsProps {
  items: MenuItem[]
  categoryLabel: string
}

export default function MenuItems({ items, categoryLabel }: MenuItemsProps) {
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null)
  const [modalOpen, setModalOpen] = useState(false)

  const handleItemClick = (item: MenuItem) => {
    setSelectedItem(item)
    setModalOpen(true)
  }

  const handleModalClose = () => {
    setModalOpen(false)
    setSelectedItem(null)
  }
  if (items.length === 0) {
    return (
      <Box sx={{ textAlign: "center", py: 8 }}>
        <Typography variant="h6" color="text.secondary">
          No hay platos disponibles en esta categoría
        </Typography>
      </Box>
    )
  }

  return (
    <Box>
      <Grid container spacing={2}>
        {items.map((item) => (
          <Grid size={{ xs: 6 }} key={item.id}>
            <Card
              onClick={() => handleItemClick(item)}
              elevation={0}
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                border: "1px solid",
                borderColor: "divider",
                transition: "all 0.3s ease",
                cursor: "pointer",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: "0 12px 24px rgba(139, 111, 71, 0.15)",
                },
              }}
            >
              <LazyImage src={item.image} alt={item.name} height={160} priority={item.priority} />
              <CardContent sx={{ flexGrow: 1, p: 1.5 }}>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "start", mb: 1 }}>
                    <Typography
                      variant="body2"
                      component="h3"
                      sx={{
                        fontWeight: 700,
                        fontSize: "0.95rem",
                        lineHeight: 1.2,
                        flex: 1,
                      }}
                    >
                      {item.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "primary.main",
                        fontWeight: 800,
                        ml: 1,
                        whiteSpace: "nowrap",
                      }}
                    >
                      {item.price}
                    </Typography>
                  </Box>

                <Box sx={{ display: "flex", gap: 0.5, flexWrap: "wrap" }}>
                  {item.isVegetarian && (
                    <Chip
                      icon={<Leaf size={12} />}
                      label="Vegetariano"
                      size="small"
                      sx={{
                        bgcolor: "rgba(76, 175, 80, 0.1)",
                        color: "#4CAF50",
                        fontWeight: 500,
                        fontSize: "0.7rem",
                      }}
                    />
                  )}
                  {item.isSpicy && (
                    <Chip
                      icon={<Flame size={12} />}
                      label="Picante"
                      size="small"
                      sx={{
                        bgcolor: "rgba(255, 87, 34, 0.1)",
                        color: "#FF5722",
                        fontWeight: 500,
                        fontSize: "0.7rem",
                      }}
                    />
                  )}
                  {item.isAlcoholic && (
                    <Chip
                      icon={<Wine size={12} />}
                      label="Alcohol"
                      size="small"
                      sx={{
                        bgcolor: "rgba(128, 0, 128, 0.1)",
                        color: "#800080",
                        fontWeight: 500,
                        fontSize: "0.7rem",
                      }}
                    />
                  )}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <ItemDetailModal open={modalOpen} item={selectedItem} onClose={handleModalClose} />
    </Box>
  )
}
