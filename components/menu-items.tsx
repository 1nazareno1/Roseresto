"use client"

import { Grid, Card, CardMedia, CardContent, Typography, Box, Chip } from "@mui/material"
import { Flame, Leaf,  Wine } from "lucide-react"
import type { MenuItem } from "@/types/menu"

interface MenuItemsProps {
  items: MenuItem[]
  categoryLabel: string
}

export default function MenuItems({ items, categoryLabel }: MenuItemsProps) {
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
      <Grid container spacing={3}>
        {items.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <Card
              elevation={0}
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                border: "1px solid",
                borderColor: "divider",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: "0 12px 24px rgba(139, 111, 71, 0.15)",
                },
              }}
            >
              <CardMedia
                component="img"
                height="240"
                image={item.image}
                alt={item.name}
                sx={{
                  objectFit: "cover",
                  bgcolor: "grey.100",
                }}
              />
              <CardContent sx={{ flexGrow: 1, p: 3 }}>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "start", mb: 1 }}>
                  <Typography
                    variant="h6"
                    component="h3"
                    sx={{
                      fontWeight: 600,
                      fontSize: "1.25rem",
                      lineHeight: 1.3,
                    }}
                  >
                    {item.name}
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      color: "primary.main",
                      fontWeight: 700,
                      ml: 2,
                    }}
                  >
                    {item.price}
                  </Typography>
                </Box>

                <Typography variant="body2" color="text.secondary" sx={{ mb: 2, lineHeight: 1.6 }}>
                  {item.description}
                </Typography>

                <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                  {item.isVegetarian && (
                    <Chip
                      icon={<Leaf size={16} />}
                      label="Vegetariano"
                      size="small"
                      sx={{
                        bgcolor: "rgba(76, 175, 80, 0.1)",
                        color: "#4CAF50",
                        fontWeight: 500,
                      }}
                    />
                  )}
                  {item.isSpicy && (
                    <Chip
                      icon={<Flame size={16} />}
                      label="Picante"
                      size="small"
                      sx={{
                        bgcolor: "rgba(255, 87, 34, 0.1)",
                        color: "#FF5722",
                        fontWeight: 500,
                      }}
                    />
                  )}
                  {item.isAlcoholic && (
                    <Chip
                      icon={<Wine size={16} />}
                      label="Contiene alcohol"
                      size="small"
                      sx={{
                        bgcolor: "rgba(128, 0, 128, 0.1)",
                        color: "#800080",
                        fontWeight: 500,
                        
                      }}
                    />
                  )}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
