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
          image: "https://res.cloudinary.com/dbnvfqybv/image/upload/Panaderia/Panaderia/butter-croissant-french",
          tags: ["Vegetariano"],
          isVegetarian: true,
        },
        {
          id: 20,
          name: "Pan de Campo",
          description: "Pan casero recién horneado con semillas",
          price: "$550",
          image: "https://res.cloudinary.com/dbnvfqybv/image/upload/Panaderia/Panaderia/homemade-bread-with-seeds",
          tags: ["Vegetariano"],
          isVegetarian: true,
        },
      ],
    },
  ],
}
