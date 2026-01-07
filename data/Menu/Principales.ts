import type { MenuCategory } from "@/types/menu"

export const principales: MenuCategory = {
  id: "principales",
  label: "principales",
  icon: "principales",
  groups: [
    //Principales Caseras
    {
        
      id: "Pastas Caseras",
      label: "Pastas Caseras",
      items: [
        {
      id: 5,
      name: "Bife de Chorizo",
      description: "400g de carne premium con papas rústicas y ensalada",
      price: "$3200",
      image: "https://res.cloudinary.com/dbnvfqybv/image/upload/Principales/Principales/grilled-beef-steak-premium",
      tags: [],
    },
    {
      id: 6,
      name: "Salmón a la Parrilla",
      description: "Filete de salmón con vegetales asados y salsa de limón",
      price: "$2800",
      image: "https://res.cloudinary.com/dbnvfqybv/image/upload/Principales/Principales/grilled-salmon-with-vegetables",
      tags: [],
    },
    
    
       ],
    },



    //Principales Platos
    {
        
      id: "Platos",
      label: "Platos",
      items: [ 
        {
      id: 7,
      name: "Risotto de Hongos",
      description: "Risotto cremoso con hongos portobello y trufa",
      price: "$2200",
      image: "https://res.cloudinary.com/dbnvfqybv/image/upload/Principales/Principales/creamy-mushroom-risotto",
      tags: ["Vegetariano"],
      isVegetarian: true,
    },
       
       ],
    },
  ],
}