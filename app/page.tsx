"use client"

import { useState, useEffect } from "react"
import { Container, Box, Button } from "@mui/material"

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

const INITIAL_ITEMS = 15
const LOAD_MORE_STEP = 10

export default function HomePage() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [visibleCount, setVisibleCount] = useState(INITIAL_ITEMS)

  const handleDrawerOpen = () => setDrawerOpen(true)
  const handleDrawerClose = () => setDrawerOpen(false)

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId)
    setVisibleCount(INITIAL_ITEMS) // 🔁 reset paginación
    setDrawerOpen(false)
    window.scrollTo(0, 0)
    window.history.pushState({ category: categoryId }, "", `?category=${categoryId}`)
  }

  // Manejar botón atrás
  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      if (event.state?.category) {
        setSelectedCategory(event.state.category)
        setVisibleCount(INITIAL_ITEMS)
      } else {
        setSelectedCategory(null)
      }
      window.scrollTo(0, 0)
    }

    window.addEventListener("popstate", handlePopState)
    return () => window.removeEventListener("popstate", handlePopState)
  }, [])

  const currentCategory: MenuCategory | undefined =
    selectedCategory ? menuData[selectedCategory as keyof typeof menuData] : undefined

  const Icon = currentCategory ? iconMap[currentCategory.icon] : null
  const categories = Object.values(menuData)

  if (!selectedCategory) {
    return (
      <main className="min-h-screen">
        <CategoriesView categories={categories} onCategorySelect={handleCategorySelect} />
        <MenuFooter />
      </main>
    )
  }

  // 🔢 total de items en la categoría primaria
  const totalItems =
    currentCategory?.groups.reduce((acc, g) => acc + g.items.length, 0) ?? 0

  // contador global para respetar visibleCount
  let renderedSoFar = 0

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

      <Container maxWidth="lg" sx={{ py: 2 }}>
        {currentCategory?.groups.map((group) => {
          if (renderedSoFar >= visibleCount) return null

          const remaining = visibleCount - renderedSoFar
          const visibleItems = group.items.slice(0, remaining)

          if (visibleItems.length === 0) return null

          renderedSoFar += visibleItems.length

          return (
            <section key={group.id}>
              <h3
                style={{
                  margin: "8px 0 16px",
                  fontSize: "1.4rem",
                  fontWeight: 600,
                  color: "#4a4a4a",
                }}
              >
                {group.label}
              </h3>

              <MenuItems items={visibleItems} categoryLabel={group.label} />
            </section>
          )
        })}

        {visibleCount < totalItems && (
          <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
            <Button
              variant="outlined"
              onClick={() => setVisibleCount((prev) => prev + LOAD_MORE_STEP)}
            >
              Cargar más
            </Button>
          </Box>
        )}
      </Container>

      <MenuFooter />
    </main>
  )
}
