"use client"

import { Grid, Card, CardMedia, CardContent, Typography, Box, Chip } from "@mui/material"
import { Flame, Leaf, Wine, WheatOff, Sparkles } from "lucide-react"
import type { MenuItem, MenuCategory } from "@/types/menu"

interface MenuItemsProps {
  category: MenuCategory
}

/**
 * COMPONENTE MenuItems
 *
 * Responsabilidad: Interpretar los datos y renderizar categorías, subgrupos e ítems
 *
 * Comportamiento:
 * - Si la categoría tiene subgrupos: renderiza cada subgrupo con su título
 * - Si la categoría no tiene subgrupos: renderiza los ítems directamente
 * - Los subgrupos se diferencian visualmente con títulos y separación
 * - Las propiedades semánticas se muestran como chips
 */
export default function MenuItems({ category }: MenuItemsProps) {
  // Renderizar ítem individual
  const renderItem = (item: MenuItem) => (
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

          {/* Propiedades semánticas como chips */}
          <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
            {item.properties?.isVegetarian && (
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
            {item.properties?.isSpicy && (
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
            {item.properties?.isAlcoholic && (
              <Chip
                icon={<Wine size={16} />}
                label="Con Alcohol"
                size="small"
                sx={{
                  bgcolor: "rgba(156, 39, 176, 0.1)",
                  color: "#9C27B0",
                  fontWeight: 500,
                }}
              />
            )}
            {item.properties?.isGlutenFree && (
              <Chip
                icon={<WheatOff size={16} />}
                label="Sin Gluten"
                size="small"
                sx={{
                  bgcolor: "rgba(33, 150, 243, 0.1)",
                  color: "#2196F3",
                  fontWeight: 500,
                }}
              />
            )}
            {item.properties?.isNew && (
              <Chip
                icon={<Sparkles size={16} />}
                label="Nuevo"
                size="small"
                sx={{
                  bgcolor: "rgba(255, 193, 7, 0.1)",
                  color: "#FFC107",
                  fontWeight: 500,
                }}
              />
            )}
          </Box>
        </CardContent>
      </Card>
    </Grid>
  )

  // Si no hay datos
  if (!category.items && !category.subgroups) {
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
      {/* Categoría CON subgrupos */}
      {category.hasSubgroups && category.subgroups ? (
        <>
          {category.subgroups.map((subgroup) => (
            <Box key={subgroup.id} sx={{ mb: 6 }}>
              {/* Título del subgrupo - visual pero NO navegable */}
              <Typography
                variant="h5"
                component="h2"
                sx={{
                  fontWeight: 600,
                  color: "primary.main",
                  mb: 3,
                  pb: 2,
                  borderBottom: "2px solid",
                  borderColor: "primary.main",
                }}
              >
                {subgroup.label}
              </Typography>

              <Grid container spacing={3}>
                {subgroup.items.map((item) => renderItem(item))}
              </Grid>
            </Box>
          ))}
        </>
      ) : (
        // Categoría SIN subgrupos - ítems directos
        <Grid container spacing={3}>
          {category.items?.map((item) => renderItem(item))}
        </Grid>
      )}
    </Box>
  )
}
