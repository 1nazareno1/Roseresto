import type React from "react"
export interface MenuItem {
  id: number
  name: string
  description: string
  price: string
  image: string
  tags: string[]
  isVegetarian?: boolean
  isSpicy?: boolean
}

export interface MenuCategory {
  id: string
  label: string
  icon: React.ReactNode
}

export interface MenuData {
  entradas: MenuItem[]
  principales: MenuItem[]
  pizzas: MenuItem[]
  postres: MenuItem[]
  bebidas: MenuItem[]
  panaderia: MenuItem[]
}
