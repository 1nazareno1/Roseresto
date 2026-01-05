"use client"

import { useState, useEffect } from "react"
import { Container } from "@mui/material"

import MenuHeader from "@/components/menu-header"
import MenuDrawer from "@/components/menu-drawer"
import MenuItems from "@/components/menu-items"
import MenuFooter from "@/components/menu-footer"
import ScrollableTabs from "@/components/scrollable-tabs"
import CategoriesView from "@/components/categories-view"

import { menuData } from "@/data/menu-data"
import { iconMap } from "@/components/Menu/icon-map"
import type { MenuCategory } from "@/types/menu"
import React from "react"

export default function HomePage() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const handleDrawerOpen = () => setDrawerOpen(true)
  const handleDrawerClose = () => setDrawerOpen(false)

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId)
    setDrawerOpen(false)
    window.scrollTo(0, 0)
    // Agregar entrada al historial del navegador
    window.history.pushState({ category: categoryId }, "", `?category=${categoryId}`)
  }

  const handleBackToCategories = () => {
    setSelectedCategory(null)
    window.scrollTo(0, 0)
  }

  // Manejar el botón atrás del navegador
  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      if (event.state?.category) {
        setSelectedCategory(event.state.category)
      } else {
        setSelectedCategory(null)
      }
      window.scrollTo(0, 0)
    }

    window.addEventListener("popstate", handlePopState)
    return () => window.removeEventListener("popstate", handlePopState)
  }, [])

  //  Categoría actual desde menuData
  const currentCategory: MenuCategory | undefined =
    selectedCategory ? menuData[selectedCategory as keyof typeof menuData] : undefined

  //  Icono dinámico
  const Icon = currentCategory
    ? iconMap[currentCategory.icon]
    : null

  // Categorías para el drawer
  const categories = Object.values(menuData)

  // Si no hay categoría seleccionada, mostrar vista de categorías
  if (!selectedCategory) {
    return (
      <main className="min-h-screen">
        <CategoriesView categories={categories} onCategorySelect={handleCategorySelect} />
        <MenuFooter />
      </main>
    )
  }

  return (
      <main className="min-h-screen">
      <MenuHeader
        onMenuClick={handleDrawerOpen}
        currentCategory={currentCategory?.label || ""}
        currentIcon={Icon ? <Icon size={24} color="#8B6F47" /> : null}
      />

      <ScrollableTabs
        categories={categories}
        selectedCategory={selectedCategory}
        onCategorySelect={handleCategorySelect}
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
                margin: "60px 0 16px",
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
