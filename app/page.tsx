"use client"

import { useState } from "react"
import { Container } from "@mui/material"

import MenuHeader from "@/components/menu-header"
import MenuDrawer from "@/components/menu-drawer"
import MenuItems from "@/components/menu-items"
import MenuFooter from "@/components/menu-footer"

import { menuData } from "@/data/menu-data"
import { iconMap } from "@/components/Menu/icon-map"
import type { MenuCategory } from "@/types/menu"
import React from "react"

export default function HomePage() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("entradas")

  const handleDrawerOpen = () => setDrawerOpen(true)
  const handleDrawerClose = () => setDrawerOpen(false)

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId)
    setDrawerOpen(false)
  }

  // 👉 Categoría actual desde menuData
  const currentCategory: MenuCategory | undefined =
    menuData[selectedCategory as keyof typeof menuData]

  // 👉 Icono dinámico (opción B)
  const Icon = currentCategory
    ? iconMap[currentCategory.icon]
    : null

  // 👉 Categorías para el drawer
  const categories = Object.values(menuData)

  return (
      <main className="min-h-screen">
      <MenuHeader
        onMenuClick={handleDrawerOpen}
        currentCategory={currentCategory?.label || ""}
        currentIcon={Icon ? <Icon size={24} color="#8B6F47" /> : null}
      />

      <MenuDrawer
        open={drawerOpen}
        onClose={handleDrawerClose}
        selectedCategory={selectedCategory}
        onCategorySelect={handleCategorySelect}
        categories={categories}
      />

      <Container maxWidth="lg" sx={{ py: 4 }}>
        {currentCategory?.groups.map((group) => (
          <section key={group.id}>
            <h3
              style={{
                margin: "40px 0 16px",
                fontSize: "1.4rem",
                fontWeight: 600,
                color: "#4a4a4a",
              }}
            >
              {group.label}
            </h3>

            <MenuItems
              items={group.items}
              categoryLabel={group.label}
            />
          </section>
        ))}
      </Container>

      <MenuFooter />
    </main>
  )
}
