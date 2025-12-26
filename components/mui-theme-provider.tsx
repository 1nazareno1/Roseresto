"use client"

import { createTheme, ThemeProvider } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import type React from "react"

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#8B6F47",
      light: "#A68A5F",
      dark: "#6B5438",
      contrastText: "#FDFAF5",
    },
    secondary: {
      main: "#E6D5C3",
      light: "#F0E5D8",
      dark: "#C9B89F",
      contrastText: "#3F3528",
    },
    background: {
      default: "#FDFAF5",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#3F3528",
      secondary: "#6B5D4F",
    },
    divider: "#E6D5C3",
  },
  typography: {
    fontFamily: "var(--font-sans), system-ui, sans-serif",
    h1: {
      fontWeight: 700,
      letterSpacing: "-0.5px",
    },
    h5: {
      fontWeight: 700,
      letterSpacing: "-0.5px",
    },
    h6: {
      fontWeight: 600,
      letterSpacing: "-0.3px",
    },
    body1: {
      lineHeight: 1.6,
    },
    body2: {
      lineHeight: 1.6,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 600,
        },
      },
    },
  },
})

interface MuiThemeProviderProps {
  children: React.ReactNode
}

export function MuiThemeProvider({ children }: MuiThemeProviderProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}
