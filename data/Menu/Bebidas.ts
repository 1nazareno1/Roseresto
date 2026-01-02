import type { MenuCategory } from "@/types/menu"

export const bebidas: MenuCategory = {
  id: "bebidas",
  label: "Bebidas",
  icon: "bebidas",
  groups: [
    {
      id: "bebidas",
      label: "Nuestras Bebidas",
      items: [
        {
          id: 16,
          name: "Vino Tinto Malbec",
          description: "Copa de vino Malbec argentino de bodega seleccionada",
          price: "$800",
          image: "/red-wine-malbec-glass.jpg",
          tags: ["Contiene Alcohol"],
          isAlcoholic: true,
        },
        {
          id: 17,
          name: "Limonada Natural",
          description: "Limonada fresca con menta y jengibre",
          price: "$450",
          image: "/fresh-lemonade-mint.jpg",
          tags: ["Vegetariano"],
          isVegetarian: true,
        },
        {
          id: 18,
          name: "Cerveza Artesanal",
          description: "Cerveza IPA de producción local",
          price: "$600",
          image: "/craft-beer-ipa.png",
          tags: [],
        },
      ],
    },
  ],
}
