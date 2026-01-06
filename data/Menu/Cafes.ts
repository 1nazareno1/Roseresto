import type { MenuCategory } from "@/types/menu"

export const cafes: MenuCategory = {
  id: "cafes",
  label: "Cafés",
  icon: "cafes",
  groups: [
    {
      id: "cafes",
      label: "TE",
      items: [
        {
          id: 101,
          name: "Té frutos rojos",
          description: "Sabor a frutos rojos con notas dulces y afrutadas",
          price: "$3.800",
          image: "/Té frutos rojos.webp",
          tags: [],
        },
        {
          id: 102,
          name: "Té oolong",
          description: "Té de oxidación media, con bajo nivel de teína y efecto relajante. Presenta notas aromáticas florales, con matices de frutos amarillos y dulces. Su licor es ámbar claro y transparente.",
          price: "$3.800",
          image: "/Té oolong.webp",
          tags: [],
        },
      ],
    },
  ],
}