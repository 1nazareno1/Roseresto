import { UtensilsCrossed, Pizza, Cake, Wine, Croissant, DollarSign, Sandwich, Coffee } from "lucide-react"
import type { IconKey } from "@/types/menu"
import type { LucideIcon } from "lucide-react"


export const iconMap: Record<IconKey, LucideIcon> = {
  entradas: Sandwich,
  principales: UtensilsCrossed,
  pizzas: Pizza,
  postres: Cake,
  bebidas: Wine,
  panaderia: Croissant,
  promos: DollarSign,
  cafes: Coffee,  
}

export function getIcon(key: IconKey): LucideIcon {
  return iconMap[key]
}
