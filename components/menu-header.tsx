"use client"

import { AppBar, Toolbar, Typography, IconButton, Box, Container } from "@mui/material"
import { Menu } from "lucide-react"
import { getIcon } from "@/lib/icon-map"

interface MenuHeaderProps {
  onMenuClick: () => void
  currentCategory: string
  currentIconName?: string
}

export default function MenuHeader({ onMenuClick, currentCategory, currentIconName }: MenuHeaderProps) {
  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        bgcolor: "background.paper",
        borderBottom: "1px solid",
        borderColor: "divider",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box sx={{ width: 40 }} />

          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            {currentIconName && getIcon(currentIconName, { size: 24, color: "#8B6F47" })}
            <Typography
              variant="h5"
              component="h1"
              sx={{
                color: "text.primary",
                fontWeight: 700,
                letterSpacing: "-0.5px",
              }}
            >
              {currentCategory}
            </Typography>
          </Box>

          <IconButton edge="end" color="inherit" aria-label="menu" onClick={onMenuClick} sx={{ color: "text.primary" }}>
            <Menu size={24} />
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
