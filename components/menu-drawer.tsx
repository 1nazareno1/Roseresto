"use client"

import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  Typography,
} from "@mui/material"

import { iconMap } from "./Menu/icon-map"
import type { MenuCategory } from "@/types/menu"

interface MenuDrawerProps {
  open: boolean
  onClose: () => void
  selectedCategory: string
  onCategorySelect: (categoryId: string) => void
  categories: MenuCategory[]
}

export default function MenuDrawer({
  open,
  onClose,
  selectedCategory,
  onCategorySelect,
  categories,
}: MenuDrawerProps) {
  const handleCategoryClick = (categoryId: string) => {
    onCategorySelect(categoryId)
    onClose()
  }

  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <Box sx={{ width: 280, pt: 2 }}>
        {/* Header */}
        <Box
          sx={{
            px: 3,
            pb: 2,
            borderBottom: "1px solid",
            borderColor: "divider",
          }}
        >
          <Typography
            variant="h6"
            sx={{ fontWeight: 700, color: "primary.main" }}
          >
            Categorías
          </Typography>
        </Box>

        {/* Categories */}
        <List>
          {categories.map((category) => {
            const Icon = iconMap[category.icon]

            return (
              <ListItem key={category.id} disablePadding>
                <ListItemButton
                  selected={selectedCategory === category.id}
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
                  <ListItemIcon
                    sx={{
                      minWidth: 40,
                      color:
                        selectedCategory === category.id
                          ? "primary.main"
                          : "text.secondary",
                    }}
                  >
                    {Icon && <Icon size={20} />}
                  </ListItemIcon>

                  <ListItemText
                    primary={category.label}
                    primaryTypographyProps={{
                      fontWeight:
                        selectedCategory === category.id ? 600 : 500,
                    }}
                  />
                </ListItemButton>
              </ListItem>
            )
          })}
        </List>
      </Box>
    </Drawer>
  )
}

