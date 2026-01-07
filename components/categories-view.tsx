"use client"

import { Box, Container, Card, CardContent, CardMedia, Typography, Grid, IconButton } from "@mui/material"
import { ChevronRight } from "lucide-react"
import { iconMap } from "@/components/Menu/icon-map"
import type { MenuCategory } from "@/types/menu"

interface CategoriesViewProps {
  categories: MenuCategory[]
  onCategorySelect: (categoryId: string) => void
}

export default function CategoriesView({ categories, onCategorySelect }: CategoriesViewProps) {
  const handleCategoryClick = (categoryId: string) => {
    window.scrollTo(0, 0)
    onCategorySelect(categoryId)
  }

  return (
    <Box sx={{ minHeight: "100vh", pt: 2, pb: 4, bgcolor: "#faf8f5" }}>
      {/* Decorative Top Border */}
      <Box
        sx={{
          height: 4,
          background: "linear-gradient(90deg, rgba(201, 169, 97, 0.4) 0%, rgba(212, 175, 120, 0.4) 50%, rgba(201, 169, 97, 0.4) 100%)",
          mb: 3,
        }}
      />

      {/* Logo Area with Premium Styling */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          py: 3,
          px: 2,
          mb: 4,
          position: "relative",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "radial-gradient(ellipse at center, rgba(212, 175, 120, 0.05) 0%, transparent 70%)",
            pointerEvents: "none",
          },
        }}
      >
        <img
          src="/Otros/Rose-inicio.png"
          alt="Logo"
          style={{
            height: "140px",
            filter: "drop-shadow(0 8px 20px rgba(139, 111, 71, 0.12))",
            position: "relative",
            zIndex: 1,
            WebkitMaskImage: "radial-gradient(circle at center, black 0%, black 70%, transparent 95%)",
            maskImage: "radial-gradient(circle at center, black 0%, black 70%, transparent 95%)",
          }}
        />
      </Box>

      <Container maxWidth="md">
        {/* Welcome Section */}
        <Box sx={{ mb: 4, textAlign: "center", position: "relative" }}>
          {/* Decorative top line */}
          <Box
            sx={{
              height: 2,
              width: 60,
              background: "linear-gradient(90deg, transparent, #c9a961, transparent)",
              mx: "auto",
              mb: 2,
            }}
          />

          <Typography
            variant="h4"
            sx={{
              textAlign: "center",
              fontWeight: 700,
              color: "#2a2a2a",
              mb: 0.5,
              fontSize: "1.4rem",
              letterSpacing: "0.5px",
            }}
          >
            Menú
          </Typography>
          <Typography
            variant="body1"
            sx={{
              textAlign: "center",
              color: "#8B6F47",
              fontSize: "0.95rem",
              fontWeight: 500,
              letterSpacing: "1px",
            }}
          >
            ELIGE UNA CATEGORÍA PARA COMENZAR
          </Typography>

          {/* Decorative bottom line */}
          <Box
            sx={{
              height: 2,
              width: 60,
              background: "linear-gradient(90deg, transparent, #c9a961, transparent)",
              mx: "auto",
              mt: 2,
            }}
          />
        </Box>

        {/* Categories Grid */}
        <Grid container spacing={1.5}>
          {categories.map((category) => {
            const Icon = iconMap[category.icon]
            return (
              <Grid size={{ xs: 6, sm: 6, md: 3 }} key={category.id}>
                <Card
                  onClick={() => handleCategoryClick(category.id)}
                  sx={{
                    height: "160px",
                    display: "flex",
                    flexDirection: "column",
                    cursor: "pointer",
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    border: "2px solid",
                    borderColor: "#d4af78",
                    borderRadius: "8px",
                    bgcolor: "#ffffff",
                    position: "relative",
                    overflow: "hidden",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: "linear-gradient(135deg, rgba(212, 175, 120, 0) 0%, rgba(212, 175, 120, 0.03) 100%)",
                      pointerEvents: "none",
                      zIndex: 1,
                    },
                    "&:hover": {
                      transform: "translateY(-6px)",
                      boxShadow: "0 12px 32px rgba(139, 111, 71, 0.2), inset 0 1px 0 rgba(212, 175, 120, 0.3)",
                      borderColor: "#c9a961",
                    },
                  }}
                >
                  {/* Icon Area */}
                  <CardMedia
                    component="div"
                    sx={{
                      height: 90,
                      background: "linear-gradient(135deg, #faf8f5 0%, #f5f3f0 100%)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderBottom: "1px solid",
                      borderColor: "#e8ddd0",
                      position: "relative",
                    }}
                  >
                    {Icon && (
                      <Box
                        sx={{
                          filter: "drop-shadow(0 2px 4px rgba(139, 111, 71, 0.1))",
                        }}
                      >
                        <Icon size={40} color="#8B6F47" strokeWidth={1.3} />
                      </Box>
                    )}
                  </CardMedia>

                  {/* Content Area */}
                  <CardContent
                    sx={{
                      flexGrow: 1,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      p: 1,
                      bgcolor: "#ffffff",
                      position: "relative",
                      zIndex: 2,
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        fontWeight: 700,
                        color: "#2a2a2a",
                        fontSize: "0.75rem",
                        letterSpacing: "0.3px",
                        textAlign: "center",
                      }}
                    >
                      {category.label}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            )
          })}
        </Grid>
      </Container>

      {/* Decorative Bottom Border */}
      <Box
        sx={{
          height: 4,
          background: "linear-gradient(90deg, rgba(201, 169, 97, 0.4) 0%, rgba(212, 175, 120, 0.4) 50%, rgba(201, 169, 97, 0.4) 100%)",
          mt: 6,
        }}
      />
    </Box>
  )
}
