"use client"

import { AppBar, Toolbar, Typography, IconButton, Box, Container } from "@mui/material"
import { Menu } from "lucide-react"
import type React from "react"

interface MenuHeaderProps {
  onMenuClick: () => void
  currentCategory: string
  currentIcon?: React.ReactNode
}

export default function MenuHeader({ onMenuClick, currentCategory, currentIcon }: MenuHeaderProps) {
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
        <Toolbar sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          
          {/*<Box sx={{ display: "flex", alignItems: "center", justifyContent: "flex-start", minWidth: 20 }}>
            <Box
              component="img"
              src="/Otros/Rose-inicio.png"
              alt="Rose Resto"
              sx={{
                height: 20,
                width: "auto",
                maxHeight: 40,
                objectFit: "contain",
                display: "block",
              }}
            />
          </Box>*/}

          <Box sx={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center", gap: 1 }}>
            {currentIcon}
            <Typography
              variant="h6"
              component="h2"
              sx={{
                color: "text.primary",
                fontWeight: 600,
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
