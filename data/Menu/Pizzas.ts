import type { MenuCategory } from "@/types/menu"

export const pizzas: MenuCategory = {
  id: "pizzas",
  label: "Pizzas",
  icon: "pizzas",
  groups: [
    {
      id: "pizzas",
      label: "Nuestras Pizzas",
      items: [
        {
          id: 9,
          name: "Pizza Margherita",
          description: "Salsa de tomate, mozzarella fresca, albahaca y aceite de oliva",
          price: "$1600",
          image: "https://res.cloudinary.com/dbnvfqybv/image/upload/Pizzas/Pizzas/margherita-pizza-classic-basil",
          tags: ["Vegetariano"],
          isVegetarian: true,
        },
        {
          id: 10,
          name: "Pizza Quattro Formaggi",
          description: "Mozzarella, gorgonzola, parmesano y provolone",
          price: "$1900",
          image: "https://res.cloudinary.com/dbnvfqybv/image/upload/Pizzas/Pizzas/four-cheese-pizza-gourmet",
          tags: ["Vegetariano"],
          isVegetarian: true,
        },
        {
          id: 11,
          name: "Pizza Pepperoni",
          description: "Salsa de tomate, mozzarella y pepperoni premium",
          price: "$1800",
          image: "https://res.cloudinary.com/dbnvfqybv/image/upload/Pizzas/Pizzas/pepperoni-pizza-classic",
          tags: [],
        },
      ],
    },
  ],
}
