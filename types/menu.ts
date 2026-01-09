import { fitnesspoint } from "@/data/Menu/FitnessPoint"


export type IconKey = "entradas" | "principales" | "sintacc" | "postres" | "bebidasSinAlcohol" | "panaderia" | "promos" 
| "cafes" | "ejecutivo" | "bebidasConAlcohol" | "fitnesspoint"


export interface MenuItem {
  id: number
  name: string
  description: string
  price: string
  image: string
  tags: string[]
  priority?: boolean
  isVegetarian?: boolean
  isSpicy?: boolean
  isAlcoholic?: boolean
}

export interface MenuGroup {
  id: string
  label: string
  items: MenuItem[]
}

export interface MenuCategory {
  id: string
  label: string
  icon: IconKey
  groups: MenuGroup[]
}

/**
 * Todas las categorías del menú
 * indexadas por id (entradas, bebidas, etc)
 */
export type MenuData = Record<string, MenuCategory>
