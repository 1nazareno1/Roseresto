import type { MenuData } from "@/types/menu"
import { entradas } from "./Menu/Entradas"
import { principales } from "./Menu/Principales"
import { pizzas } from "./Menu/Pizzas"
import { postres } from "./Menu/Postres"
import { bebidas } from "./Menu/Bebidas"
import { panaderia } from "./Menu/Panaderia"
import { promos } from "./Menu/Promos"

export const menuData: MenuData = {
  entradas,
  principales,
  pizzas,
  postres,
  bebidas,
  panaderia,
  promos,
}
