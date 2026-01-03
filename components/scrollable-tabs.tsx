
import React from "react"
import { Box, Tabs, Tab } from "@mui/material"
import { iconMap } from "@/components/Menu/icon-map"
import type { MenuCategory } from "@/types/menu"

interface ScrollableTabsProps {
  categories: MenuCategory[]
  selectedCategory: string
  onCategorySelect: (categoryId: string) => void
}

export default function ScrollableTabs({ categories, selectedCategory, onCategorySelect }: ScrollableTabsProps) {
  const handleChange = (_: React.SyntheticEvent, newValue: string) => {
    onCategorySelect(newValue)
  }

  return (
    <Box sx={{ borderBottom: 1, borderColor: "divider", bgcolor: "background.paper" }}>
      <Tabs
        value={selectedCategory}
        onChange={handleChange}
        variant="scrollable"
        aria-label="categorías del menú"
      >
        {categories.map((cat) => {
          const Icon = iconMap[cat.icon]

          return (
            <Tab
              key={cat.id}
              value={cat.id}
              label={
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  {Icon && <Icon size={14} />}
                  <Box component="span" sx={{ fontWeight: 400 }}>
                    {cat.label}
                  </Box>
                </Box>
              }
            />
          )
        })}
      </Tabs>
    </Box>
  )
}
