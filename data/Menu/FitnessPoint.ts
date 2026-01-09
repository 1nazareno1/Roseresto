import type { MenuCategory } from "@/types/menu"

export const fitnesspoint: MenuCategory = {
  id: "fitnesspoint",
  label: "Fitness Point",
  icon: "fitnesspoint",
  groups: [
    {
      id: "fitnesspoint",
      label: "Nuestras Bebidas",
      items: [
        {
          id: 17,
          name: "Limonada Natural",
          description: "Limonada fresca con menta y jengibre",
          price: "$450",
          image: "https://res.cloudinary.com/dbnvfqybv/image/upload/v1767813070/Bebidas/Bebidas/fresh-lemonade-mint.jpg",
          tags: ["Vegetariano"],
          isVegetarian: true,
        },
      ],
    },
  ],
}
