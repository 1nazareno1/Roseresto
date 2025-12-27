"use client"

import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Box, Typography } from "@mui/material"
import type { MenuCategory } from "@/types/menu"
import { getIcon } from "@/lib/icon-map"

interface MenuDrawerProps {
  open: boolean
  onClose: () => void
  categories: MenuCategory[]
  selectedCategoryId: string
  onCategorySelect: (categoryId: string) => void
}

/**
 * COMPONENTE MenuDrawer
 *
 * Responsabilidad: Mostrar la navegación de categorías principales en un drawer lateral
 *
 * Comportamiento:
 * - Solo muestra las categorías principales (nivel de navegación)
 * - NO muestra subgrupos internos (estos se descubren mediante scroll en el contenido)
 * - La categoría seleccionada se destaca visualmente
 * - Al seleccionar una categoría, cierra el drawer y actualiza el contenido
 */
export default function MenuDrawer({
  open,
  onClose,
  categories,
  selectedCategoryId,
  onCategorySelect,
}: MenuDrawerProps) {
  const handleCategoryClick = (categoryId: string) => {
    onCategorySelect(categoryId)
    onClose()
  }

  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <Box sx={{ width: 280, pt: 2 }}>
        <Box sx={{ px: 3, pb: 2, borderBottom: "1px solid", borderColor: "divider" }}>
          <Typography variant="h6" sx={{ fontWeight: 700, color: "primary.main" }}>
            Menú
          </Typography>
        </Box>
        <List>
          {categories.map((category) => (
            <ListItem key={category.id} disablePadding>
              <ListItemButton
                selected={selectedCategoryId === category.id}
                onClick={() => handleCategoryClick(category.id)}
                sx={{
                  py: 2,
                  "&.Mui-selected": {
                    bgcolor: "rgba(139, 111, 71, 0.1)",
                    borderRight: "4px solid",
                    borderColor: "primary.main",
                    "&:hover": {
                      bgcolor: "rgba(139, 111, 71, 0.15)",
                    },
                  },
                }}
              >
                <ListItemIcon sx={{ color: selectedCategoryId === category.id ? "primary.main" : "text.secondary" }}>
                  {getIcon(category.iconName, { size: 24 })}
                </ListItemIcon>
                <ListItemText
                  primary={category.label}
                  primaryTypographyProps={{
                    fontWeight: selectedCategoryId === category.id ? 600 : 400,
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  )
}
