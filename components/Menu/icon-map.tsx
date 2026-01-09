import { UtensilsCrossed, Cake, Wine, Croissant, DollarSign, Sandwich, Coffee, WheatOff, HandPlatter, WineOff, Dumbbell  } from "lucide-react"
import type { IconKey } from "@/types/menu"
import type { LucideIcon } from "lucide-react"


export const iconMap: Record<IconKey, LucideIcon> = {
  entradas: Sandwich,
  principales: UtensilsCrossed,
  sintacc: WheatOff,
  postres: Cake,
  bebidasSinAlcohol: WineOff,
  bebidasConAlcohol: Wine,
  panaderia: Croissant,
  promos: DollarSign,
  cafes: Coffee,  
  ejecutivo: HandPlatter,
  fitnesspoint: Dumbbell,
}

export function getIcon(key: IconKey): LucideIcon {
  return iconMap[key]
}
