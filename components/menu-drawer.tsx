"use client"

import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Box, Typography } from "@mui/material"
import { Pizza, UtensilsCrossed, Sandwich, Cake, Wine, Cookie } from "lucide-react"
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

const categories = [
  { id: "entradas", label: "Entradas", icon: <Sandwich size={24} /> },
  { id: "principales", label: "Principales", icon: <UtensilsCrossed size={24} /> },
  { id: "pizzas", label: "Pizzas", icon: <Pizza size={24} /> },
  { id: "postres", label: "Postres", icon: <Cake size={24} /> },
  { id: "bebidas", label: "Bebidas", icon: <Wine size={24} /> },
  { id: "panaderia", label: "Panadería", icon: <Cookie size={24} /> },
  { id: "PROMOS", label: "PROMOS", icon: <AttachMoneyIcon /> },
]

interface MenuDrawerProps {
  open: boolean
  onClose: () => void
  selectedCategory: string
  onCategorySelect: (categoryId: string) => void
}

export default function MenuDrawer({ open, onClose, selectedCategory, onCategorySelect }: MenuDrawerProps) {
  const handleCategoryClick = (categoryId: string) => {
    onCategorySelect(categoryId)
    onClose()
  }

  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <Box sx={{ width: 280, pt: 2 }}>
        <Box sx={{ px: 3, pb: 2, borderBottom: "1px solid", borderColor: "divider" }}>
          <Typography variant="h6" sx={{ fontWeight: 700, color: "primary.main" }}>
            Categorías
          </Typography>
        </Box>
        <List>
          {categories.map((category) => (
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
                <ListItemIcon sx={{ color: selectedCategory === category.id ? "primary.main" : "text.secondary" }}>
                  {category.icon}
                </ListItemIcon>
                <ListItemText
                  primary={category.label}
                  primaryTypographyProps={{
                    fontWeight: selectedCategory === category.id ? 600 : 400,
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
