import type { MenuCategory } from "@/types/menu"

export const promos: MenuCategory = {
  id: "promos",
  label: "Promos",
  icon: "promos",
  groups: [
    {
      id: "promos",
      label: "Ofertas Especiales",
      items: [
        {
          id: 21,
          name: "Combo Pizza + Bebida",
          description: "Pizza Margherita + Limonada Natural a un precio especial",
          price: "$1900",
          image: "",
          tags: ["Vegetariano"],
          isVegetarian: true,
        },
      ],
    },
  ],
}
