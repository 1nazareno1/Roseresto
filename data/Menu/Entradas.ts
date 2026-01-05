import type { MenuCategory } from "@/types/menu"

export const entradas: MenuCategory = {
  id: "entradas",
  label: "Entradas",
  icon: "entradas",
  groups: [
    //Entradas Group
    {
        
      id: "entradas",
      label: "Entradas",
      items: [
        {
      id: 1,
      name: "RABAS",
      description: "Acompañadas con salsa alioli y limón",
      price: "$17.900",
      image: "/Rabas.webp",
      tags: ["Clásico"],
        },
        {
      id: 2,
      name: "Papas rústicas con 3 salsas",
      description: "salsa1: alioli salsa2: crema de cebolla salsa 3: barbacoa",  
      price: "$14.900",
      image: "/Papas Rusticas.png",
      tags: ["vegetariano"],
      isVegetarian: true,
        },
        {
      id: 3,
      name: "Provoleta grill",
      description: "medallón de provoleta acompañado de tomates cherries confitados, rúcula y aceite de albahaca, la combinación perfecta!!",
      price: "$17.000", 
      image: "/Provoletas.png",
      tags: ["vegetariano"],
      isVegetarian: true,  
        },
        {
      id: 4,
      name: "Picada para Empezar!",
      description: "Picada completa para empezar! Ravioles de bondiola (4 unid), pincho de pollo (4 unid), variedad de dips con queso gouda, aceitunas marinadas, chorizo seco, maní tostado con pan casero.",
      price: "$25.400",
      image: "/Picada para empezar.png",
      tags: [],
        },
        {
      id: 5,
      name: "Porción de Papas",
      description: "",
      price: "$7.400",
      image: "/Porcion de papas.webp",
      tags: ["vegetariano"],
      isVegetarian: true,
        },

    
       ],
    },



    //Entradas Dips Group
    {
        
      id: "entradas-dips",
      label: "Entradas Dips",
      items: [ 

        {
      id: 6,
      name: "maní tostado",
      description: "",
      price: "$2.600",
      image: "/Mani tostado.webp",
      tags: ["vegetariano"],
      isVegetarian: true,
        },
        {
      id: 7,
      name: "Aceitunas marinadas",
      description: "",
      price: "$2.800",
      image: "/Aceitunas marinadas.webp",
      tags: ["vegetariano"],
      isVegetarian: true,
        },
        {
      id: 8,
      name: "Queso gouda",
      description: "",
      price: "$3.400",
      image: "/Queso gouda.webp",
      tags: ["vegetariano"],
      isVegetarian: true,
        },
        {
      id: 9,
      name: "Chorizo seco",
      description: "",
      price: "$4.000",
      image: "/Chorizo seco.webp",
      tags: [],
        },
        {
      id: 10,
      name: "Ravioles de bondiola fritos",
      description: "4 unidades de ravioles de bondiola fritos",
      price: "$5.000",
      image: "/Ravioles fritos.webp",
      tags: [],
        },
        {
      id: 11,
      name: "Croquetas de pollo",
      description: "4 croquetas de pollo rebozados acompañados con salsa ranch",
      price: "$6.500",
      image: "/Croquetas de pollo.webp",
      tags: [],
        },
        {
      id: 12,
      name: "Adicional de papas",
      description: "Agregale papas a tu sandwich o el plato que desees!!",
      price: "$5.800",
      image: "/Adicional de papas.webp",
      tags: ["vegetariano"],
      isVegetarian: true,
        },



       ],
    },
  ],
}