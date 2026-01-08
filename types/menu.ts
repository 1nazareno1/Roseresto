

export type IconKey = "entradas" | "principales" | "pizzas" | "postres" | "bebidas" | "panaderia" | "promos" | "cafes"


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
