import type { MenuCategory } from "@/types/menu"

export const postres: MenuCategory = {
  id: "postres",
  label: "Postres",
  icon: "postres",
  groups: [
    {
      id: "postres",
      label: "Nuestros Postres",
      items: [
        {
          id: 13,
          name: "Tiramisú",
          description: "Clásico postre italiano con café, mascarpone y cacao",
          price: "$950",
          image: "/Postres/tiramisu-italian-dessert.jpg",
          tags: ["Vegetariano"],
          isVegetarian: true,
        },
        {
          id: 14,
          name: "Brownie con Helado",
          description: "Brownie de chocolate caliente con helado de vainilla",
          price: "$850",
          image: "/Postres/chocolate-brownie-ice-cream.png",
          tags: ["Vegetariano"],
          isVegetarian: true,
        },
      ],
    },
  ],
}
