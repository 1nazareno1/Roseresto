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
      name: "Ensalada Caesar",
      description: "Lechuga romana, parmesano, crutones caseros y aderezo caesar tradicional",
      price: "$850",
      image: "/caesar-salad-fresh-lettuce.jpg",
      tags: ["Vegetariano"],
      isVegetarian: true,
        },
        {
      id: 2,
      name: "Bruschetta Caprese",
      description: "Pan artesanal tostado con tomates frescos, mozzarella, albahaca y reducción balsámica",
      price: "$750",
      image: "/bruschetta-caprese-tomato-mozzarella.jpg",
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
      id: 3,
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