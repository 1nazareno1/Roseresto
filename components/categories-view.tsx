"use client"

import { Box, Container, Card, CardContent, Typography, Grid } from "@mui/material"
import { iconMap } from "@/components/Menu/icon-map"
import LazyImage from "./lazy-image"
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
          background:
            "linear-gradient(90deg, rgba(201,169,97,0.4) 0%, rgba(212,175,120,0.4) 50%, rgba(201,169,97,0.4) 100%)",
          mb: 3,
        }}
      />

      {/* ÁREA DEL LOGO */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          py: 3,
          px: 2,
          mb: 4,
          position: "relative",
          background:
            "radial-gradient(ellipse at center, rgba(210,140,69,0.22) 0%, rgba(250,248,245,1) 70%)",
        }}
      >
        {/* Contenedor del logo */}
        <Box
          sx={{
            position: "relative",
            zIndex: 1,
            maxWidth: 240,
            width: "100%",
            height: 100,
            overflow: "hidden",
            backgroundColor: "#faf8f5",
          }}
        >
          {/* Overlay de difuminado (misma lógica que tu código) */}
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              zIndex: 2,
              pointerEvents: "none",
              background: `
                linear-gradient(to top, #faf8f5 0%, transparent 25%),
                linear-gradient(to bottom, #faf8f5 0%, transparent 25%),
                linear-gradient(to left, #faf8f5 0%, transparent 20%),
                linear-gradient(to right, #faf8f5 0%, transparent 20%)
              `,
            }}
          />

          <LazyImage
            src="https://res.cloudinary.com/dbnvfqybv/image/upload/Otros/Otros/Rose-inicio"
            alt="Logo"
            width={240}
            height={100}
            objectFit="contain"
            style={{
              position: "relative",
              zIndex: 1,
            }}
          />
        </Box>
      </Box>

      <Container maxWidth="md">
        {/* Welcome Section */}
        <Box sx={{ mb: 4, textAlign: "center" }}>
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
            sx={{
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
            sx={{
              color: "#8B6F47",
              fontSize: "0.95rem",
              fontWeight: 500,
              letterSpacing: "1px",
            }}
          >
            ELIGE UNA CATEGORÍA PARA COMENZAR
          </Typography>

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
                    height: 160,
                    display: "flex",
                    flexDirection: "column",
                    cursor: "pointer",
                    border: "2px solid #d4af78",
                    borderRadius: "8px",
                    bgcolor: "#ffffff",
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    "&:hover": {
                      transform: "translateY(-6px)",
                      boxShadow: "0 12px 32px rgba(139,111,71,0.2)",
                      borderColor: "#c9a961",
                    },
                  }}
                >
                  <Box
                    sx={{
                      height: 90,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "linear-gradient(135deg, #faf8f5 0%, #f5f3f0 100%)",
                      borderBottom: "1px solid #e8ddd0",
                    }}
                  >
                    {Icon && <Icon size={40} color="#8B6F47" strokeWidth={1.3} />}
                  </Box>

                  <CardContent
                    sx={{
                      flexGrow: 1,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      p: 1,
                    }}
                  >
                    <Typography
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
          background:
            "linear-gradient(90deg, rgba(201,169,97,0.4) 0%, rgba(212,175,120,0.4) 50%, rgba(201,169,97,0.4) 100%)",
          mt: 6,
        }}
      />
    </Box>
  )
}
