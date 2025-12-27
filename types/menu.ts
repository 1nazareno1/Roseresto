/**
 * Propiedades semánticas de un ítem del menú
 * Estas propiedades son independientes de la presentación
 */
export interface ItemProperties {
  isVegetarian?: boolean
  isSpicy?: boolean
  isAlcoholic?: boolean
  isGlutenFree?: boolean
  isNew?: boolean
}

/**
 * Ítem individual del menú
 * Contiene solo información del producto, sin lógica de navegación ni renderizado
 */
export interface MenuItem {
  id: number
  name: string
  description: string
  price: string
  image: string
  properties?: ItemProperties
}

/**
 * Subgrupo interno (NO navegable)
 * Agrupa ítems para mejorar la organización visual dentro de una categoría
 * Ejemplo: "Con alcohol" y "Sin alcohol" dentro de Bebidas
 */
export interface MenuSubgroup {
  id: string
  label: string
  items: MenuItem[]
}

/**
 * Categoría principal (navegable)
 * Representa un bloque principal del menú
 * Puede contener ítems directos o subgrupos internos
 */
export interface MenuCategory {
  id: string
  label: string
  iconName: string
  // Si hasSubgroups es true, usar subgroups; si false, usar items directamente
  hasSubgroups: boolean
  subgroups?: MenuSubgroup[]
  items?: MenuItem[]
}

/**
 * Estructura completa del menú
 * Contiene todas las categorías principales
 */
export interface MenuData {
  categories: MenuCategory[]
}
