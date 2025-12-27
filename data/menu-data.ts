import type { MenuData } from "@/types/menu"

/**
 * DATOS DEL MENÚ
 *
 * Estructura de datos que refleja la jerarquía conceptual del menú:
 * 1. Categorías principales (navegables en drawer/header)
 * 2. Subgrupos internos (organizativos, visibles solo en contenido)
 * 3. Ítems individuales (productos)
 *
 * INSTRUCCIONES PARA MANTENER:
 * - Para agregar un ítem: añádelo al array items de su categoría o subgrupo
 * - Para crear un subgrupo: añádelo al array subgroups de la categoría
 * - Para agregar una categoría: añádela al array categories con su icono
 * - Las imágenes deben estar en /public/images/{categoría}/
 */

export const menuData: MenuData = {
  categories: [
    // ENTRADAS - Sin subgrupos
    {
      id: "entradas",
      label: "Entradas",
      iconName: "Sandwich",
      hasSubgroups: false,
      items: [
        {
          id: 1,
          name: "Ensalada Caesar",
          description: "Lechuga romana, parmesano, crutones caseros y aderezo caesar tradicional",
          price: "$850",
          image: "/caesar-salad-fresh-lettuce.jpg",
          properties: { isVegetarian: true },
        },
        {
          id: 2,
          name: "Bruschetta Caprese",
          description: "Pan artesanal tostado con tomates frescos, mozzarella, albahaca y reducción balsámica",
          price: "$750",
          image: "/bruschetta-caprese-tomato-mozzarella.jpg",
          properties: { isVegetarian: true },
        },
        {
          id: 3,
          name: "Calamares Fritos",
          description: "Anillos de calamar crujientes con salsa tártara y limón",
          price: "$1200",
          image: "/fried-calamari-golden-crispy.jpg",
          properties: { isSpicy: true },
        },
      ],
    },

    // PLATOS PRINCIPALES - Sin subgrupos
    {
      id: "principales",
      label: "Principales",
      iconName: "UtensilsCrossed",
      hasSubgroups: false,
      items: [
        {
          id: 5,
          name: "Bife de Chorizo",
          description: "400g de carne premium con papas rústicas y ensalada",
          price: "$3200",
          image: "/grilled-beef-steak-premium.jpg",
          properties: { isGlutenFree: true },
        },
        {
          id: 6,
          name: "Salmón a la Parrilla",
          description: "Filete de salmón con vegetales asados y salsa de limón",
          price: "$2800",
          image: "/grilled-salmon-with-vegetables.jpg",
          properties: { isGlutenFree: true },
        },
        {
          id: 7,
          name: "Risotto de Hongos",
          description: "Risotto cremoso con hongos portobello y trufa",
          price: "$2200",
          image: "/creamy-mushroom-risotto.jpg",
          properties: { isVegetarian: true },
        },
      ],
    },

    // PIZZAS - Sin subgrupos
    {
      id: "pizzas",
      label: "Pizzas",
      iconName: "Pizza",
      hasSubgroups: false,
      items: [
        {
          id: 9,
          name: "Pizza Margherita",
          description: "Salsa de tomate, mozzarella fresca, albahaca y aceite de oliva",
          price: "$1600",
          image: "/margherita-pizza-classic-basil.jpg",
          properties: { isVegetarian: true },
        },
        {
          id: 10,
          name: "Pizza Quattro Formaggi",
          description: "Mozzarella, gorgonzola, parmesano y provolone",
          price: "$1900",
          image: "/four-cheese-pizza-gourmet.jpg",
          properties: { isVegetarian: true },
        },
        {
          id: 11,
          name: "Pizza Pepperoni",
          description: "Salsa de tomate, mozzarella y pepperoni premium",
          price: "$1800",
          image: "/pepperoni-pizza-classic.jpg",
          properties: {},
        },
      ],
    },

    // POSTRES - Sin subgrupos
    {
      id: "postres",
      label: "Postres",
      iconName: "Cake",
      hasSubgroups: false,
      items: [
        {
          id: 13,
          name: "Tiramisú",
          description: "Clásico postre italiano con café, mascarpone y cacao",
          price: "$950",
          image: "/tiramisu-italian-dessert.jpg",
          properties: { isVegetarian: true },
        },
        {
          id: 14,
          name: "Brownie con Helado",
          description: "Brownie de chocolate caliente con helado de vainilla",
          price: "$850",
          image: "/chocolate-brownie-ice-cream.png",
          properties: { isVegetarian: true },
        },
      ],
    },

    // BEBIDAS - CON SUBGRUPOS (Ejemplo de jerarquía interna)
    {
      id: "bebidas",
      label: "Bebidas",
      iconName: "Wine",
      hasSubgroups: true,
      subgroups: [
        {
          id: "con-alcohol",
          label: "Con Alcohol",
          items: [
            {
              id: 16,
              name: "Vino Tinto Malbec",
              description: "Copa de vino Malbec argentino de bodega seleccionada",
              price: "$800",
              image: "/red-wine-malbec-glass.jpg",
              properties: { isAlcoholic: true },
            },
            {
              id: 18,
              name: "Cerveza Artesanal",
              description: "Cerveza IPA de producción local",
              price: "$600",
              image: "/craft-beer-ipa.png",
              properties: { isAlcoholic: true },
            },
          ],
        },
        {
          id: "sin-alcohol",
          label: "Sin Alcohol",
          items: [
            {
              id: 17,
              name: "Limonada Natural",
              description: "Limonada fresca con menta y jengibre",
              price: "$450",
              image: "/fresh-lemonade-mint.jpg",
              properties: { isVegetarian: true },
            },
            {
              id: 21,
              name: "Jugo de Naranja Natural",
              description: "Jugo de naranja recién exprimido",
              price: "$400",
              image: "/fresh-orange-juice.png",
              properties: { isVegetarian: true },
            },
          ],
        },
      ],
    },

    // PANADERÍA - Sin subgrupos
    {
      id: "panaderia",
      label: "Panadería",
      iconName: "Cookie",
      hasSubgroups: false,
      items: [
        {
          id: 19,
          name: "Croissant de Manteca",
          description: "Croissant francés hojaldrado con manteca de calidad",
          price: "$400",
          image: "/butter-croissant-french.jpg",
          properties: { isVegetarian: true },
        },
        {
          id: 20,
          name: "Pan de Campo",
          description: "Pan casero recién horneado con semillas",
          price: "$550",
          image: "/homemade-bread-with-seeds.jpg",
          properties: { isVegetarian: true },
        },
      ],
    },

    // PROMOCIONES - Sin subgrupos (ejemplo de categoría adicional)
    {
      id: "promociones",
      label: "Promociones",
      iconName: "Percent",
      hasSubgroups: false,
      items: [
        {
          id: 22,
          name: "Combo Pareja",
          description: "2 platos principales + 1 postre para compartir + bebida",
          price: "$5500",
          image: "/romantic-dinner-couple.jpg",
          properties: { isNew: true },
        },
      ],
    },
  ],
}
