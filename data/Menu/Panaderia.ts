import type { MenuCategory } from "@/types/menu"

export const panaderia: MenuCategory = {
  id: "panaderia",
  label: "Panadería",
  icon: "panaderia",
  groups: [
    {
      id: "panaderia",
      label: "Productos de Panadería",
      items: [
        {
          id: 19,
          name: "Croissant de Manteca",
          description: "Croissant francés hojaldrado con manteca de calidad",
          price: "$400",
          image: "/Panaderia/butter-croissant-french.jpg",
          tags: ["Vegetariano"],
          isVegetarian: true,
        },
        {
          id: 20,
          name: "Pan de Campo",
          description: "Pan casero recién horneado con semillas",
          price: "$550",
          image: "/Panaderia/homemade-bread-with-seeds.jpg",
          tags: ["Vegetariano"],
          isVegetarian: true,
        },
      ],
    },
  ],
}
