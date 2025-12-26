"use client"

import { useState } from "react"
import { Container } from "@mui/material"
import { Pizza, UtensilsCrossed, Sandwich, Cake, Wine, Cookie } from "lucide-react"
import MenuHeader from "@/components/menu-header"
import MenuDrawer from "@/components/menu-drawer"
import MenuItems from "@/components/menu-items"
import MenuFooter from "@/components/menu-footer"
import { menuData } from "@/data/menu-data"
import type { MenuCategory } from "@/types/menu"

const categories: MenuCategory[] = [
  { id: "entradas", label: "Entradas", icon: <Sandwich size={24} color="#8B6F47" /> },
  { id: "principales", label: "Principales", icon: <UtensilsCrossed size={24} color="#8B6F47" /> },
  { id: "pizzas", label: "Pizzas", icon: <Pizza size={24} color="#8B6F47" /> },
  { id: "postres", label: "Postres", icon: <Cake size={24} color="#8B6F47" /> },
  { id: "bebidas", label: "Bebidas", icon: <Wine size={24} color="#8B6F47" /> },
  { id: "panaderia", label: "Panadería", icon: <Cookie size={24} color="#8B6F47" /> },
]

export default function HomePage() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("entradas")

  const handleDrawerOpen = () => {
    setDrawerOpen(true)
  }

  const handleDrawerClose = () => {
    setDrawerOpen(false)
  }

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId)
  }

  const currentCategory = categories.find((cat) => cat.id === selectedCategory)
  const currentItems = menuData[selectedCategory as keyof typeof menuData] || []

  return (
    <main className="min-h-screen">
      <MenuHeader
        onMenuClick={handleDrawerOpen}
        currentCategory={currentCategory?.label || ""}
        currentIcon={currentCategory?.icon}
      />

      <MenuDrawer
        open={drawerOpen}
        onClose={handleDrawerClose}
        selectedCategory={selectedCategory}
        onCategorySelect={handleCategorySelect}
      />

      <Container maxWidth="lg" sx={{ py: 4 }}>
        <MenuItems items={currentItems} categoryLabel={currentCategory?.label || ""} />
      </Container>

      <MenuFooter />
    </main>
  )
}
