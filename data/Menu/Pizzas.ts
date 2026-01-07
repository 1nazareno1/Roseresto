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
          image: "/Pizzas/margherita-pizza-classic-basil.jpg",
          tags: ["Vegetariano"],
          isVegetarian: true,
        },
        {
          id: 10,
          name: "Pizza Quattro Formaggi",
          description: "Mozzarella, gorgonzola, parmesano y provolone",
          price: "$1900",
          image: "/Pizzas/four-cheese-pizza-gourmet.jpg",
          tags: ["Vegetariano"],
          isVegetarian: true,
        },
        {
          id: 11,
          name: "Pizza Pepperoni",
          description: "Salsa de tomate, mozzarella y pepperoni premium",
          price: "$1800",
          image: "/Pizzas/pepperoni-pizza-classic.jpg",
          tags: [],
        },
      ],
    },
  ],
}
