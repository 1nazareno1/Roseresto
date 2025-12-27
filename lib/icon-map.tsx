import type React from "react"
import { Pizza, UtensilsCrossed, Sandwich, Cake, Wine, Cookie, Percent, HelpCircle } from "lucide-react"

/**
 * Mapeo de nombres de iconos a componentes de lucide-react
 * Esto permite usar strings en los datos y renderizar componentes React
 */
export const iconMap: Record<string, React.ComponentType<{ size?: number; color?: string }>> = {
  Pizza,
  UtensilsCrossed,
  Sandwich,
  Cake,
  Wine,
  Cookie,
  Percent,
}

/**
 * Función helper para obtener un icono por nombre
 */
export function getIcon(iconName: string, props?: { size?: number; color?: string }) {
  const IconComponent = iconMap[iconName] || HelpCircle
  return <IconComponent {...props} />
}
