import type { MenuCategory } from "@/types/menu";

export const ejecutivo: MenuCategory = {
  id: "ejecutivo",
  label: "Ejecutivo",
  icon: "ejecutivo",
  groups: [
    {
      id: "sintacc",
      label: "sintacc",
      items: [
        {
          id: 1,
          name: "Muzzarella Sintacc",
          description: "Clásica pizza de muzzarella con salsa de tomate casera y orégano.",
          price: "$22.000",
          image: "https://res.cloudinary.com/dbnvfqybv/image/upload/Postres/Postres/tiramisu-italian-dessert",
          tags: [],
        },
      ],
    },
  ]


}