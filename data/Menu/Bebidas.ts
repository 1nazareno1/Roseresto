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
          image: "https://res.cloudinary.com/dbnvfqybv/image/upload/Bebidas/Bebidas/red-wine-malbec-glass",
          tags: ["Contiene Alcohol"],
          isAlcoholic: true,
        },
        {
          id: 17,
          name: "Limonada Natural",
          description: "Limonada fresca con menta y jengibre",
          price: "$450",
          image: "https://res.cloudinary.com/dbnvfqybv/image/upload/Bebidas/Bebidas/fresh-lemonade-mint",
          tags: ["Vegetariano"],
          isVegetarian: true,
        },
        {
          id: 18,
          name: "Cerveza Artesanal",
          description: "Cerveza IPA de producción local",
          price: "$600",
          image: "https://res.cloudinary.com/dbnvfqybv/image/upload/Bebidas/Bebidas/craft-beer-ipa",
          tags: [],
        },
      ],
    },
  ],
}
