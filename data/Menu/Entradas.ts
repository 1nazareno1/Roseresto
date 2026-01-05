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
      tags: [],
        },
        {
      id: 3,
      name: "Provoleta grill",
      description: "medallón de provoleta acompañado de tomates cherries confitados, rúcula y aceite de albahaca, la combinación perfecta!!",
      price: "$17.000", 
      image: "/Provoletas.png",
      tags: [],   
        },
        {
      id: 500,
      name: "Ensalada Caesar",
      description: "Lechuga romana, parmesano, crutones caseros y aderezo caesar tradicional",
      price: "$850",
      image: "/caesar-salad-fresh-lettuce.jpg",
      tags: ["Vegetariano"],
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
      id: 501,
      name: "Calamares Fritos",
      description: "Anillos de calamar crujientes con salsa tártara y limón",
      price: "$1200",
      image: "/fried-calamari-golden-crispy.jpg",
      tags: ["Picante"],
      isSpicy: true,
        },
       ],
    },
  ],
}