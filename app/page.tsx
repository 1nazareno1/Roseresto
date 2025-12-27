"use client"

import { useState } from "react"
import { Container } from "@mui/material"
import MenuHeader from "@/components/menu-header"
import MenuDrawer from "@/components/menu-drawer"
import MenuItems from "@/components/menu-items"
import MenuFooter from "@/components/menu-footer"
import { menuData } from "@/data/menu-data"

export default function HomePage() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [selectedCategoryId, setSelectedCategoryId] = useState("entradas")

  const handleDrawerOpen = () => {
    setDrawerOpen(true)
  }

  const handleDrawerClose = () => {
    setDrawerOpen(false)
  }

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategoryId(categoryId)
  }

  // Obtener la categoría actual de los datos
  const currentCategory = menuData.categories.find((cat) => cat.id === selectedCategoryId)

  if (!currentCategory) {
    return null
  }

  return (
    <main className="min-h-screen">
      <MenuHeader
        onMenuClick={handleDrawerOpen}
        currentCategory={currentCategory.label}
        currentIconName={currentCategory.iconName}
      />

      <MenuDrawer
        open={drawerOpen}
        onClose={handleDrawerClose}
        categories={menuData.categories}
        selectedCategoryId={selectedCategoryId}
        onCategorySelect={handleCategorySelect}
      />

      <Container maxWidth="lg" sx={{ py: 4 }}>
        <MenuItems category={currentCategory} />
      </Container>

      <MenuFooter />
    </main>
  )
}
