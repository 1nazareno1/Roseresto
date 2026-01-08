import type { MenuCategory } from "@/types/menu"

export const promos: MenuCategory = {
  id: "promos",
  label: "Promos",
  icon: "promos",
  groups: [
    {
      id: "promos",
      label: "Ofertas Especiales",
      items: [
        {
          id: 701,
          name: "Tostón + café con leche en taza + vaso de jugo de naranja",
          description: "desayuno completo en nutrientes",
          price: "$14.500",
          image: "https://res.cloudinary.com/dbnvfqybv/image/upload/v1767869698/Tost%C3%B3n_caf%C3%A9_con_leche_en_taza_vaso_de_jugo_de_naranja_mvskp5.png",
          tags: [],
          priority: true,
        },
        {
          id: 702,
          name: "Café con leche + 2 medialunas",
          description: "tu desayuno o merienda ideal!",   
          price: "$6.400",
          image: "https://res.cloudinary.com/dbnvfqybv/image/upload/v1767870734/Caf%C3%A9_con_leche_2_medialunas_fyxwxl.webp",
          tags: [],
          priority: true,
        },
        {
          id: 703,
          name: "Cafe + 2 medialunas c/ jamón y queso",
          description: "tu desayuno o merienda ideal... con jamón y queso!",  
          price: "$9.200",
          image: "https://res.cloudinary.com/dbnvfqybv/image/upload/v1767871033/Cafe_2_medialunas_con_jam%C3%B3n_y_queso_ouumvj.png",
          tags: [],
          priority: true,
        },
        {
          id: 704,
          name: "Café + tostado en pan ciabatta de jamón y queso",
          description: "desayuno o merienda completo en nutrientes",
          price: "$12.000",
          image: "https://res.cloudinary.com/dbnvfqybv/image/upload/v1767871586/Caf%C3%A9_tostado_en_pan_ciabatta_de_jam%C3%B3n_y_queso_ctwznh.png",
          tags: [],
        },
        {
          id: 705,  
          name: "Café + porción de torta a elección",
          description: "tiramisú / chocotorta / rose / balcarce / bombón / tarta de frutilla / lemon pie / otoñal / moka / brownie",
          price: "$11.500",
          image: "https://res.cloudinary.com/dbnvfqybv/image/upload/v1767871822/Caf%C3%A9_porci%C3%B3n_de_torta_a_elecci%C3%B3n_wehhq9.webp",
          tags: [],
        },
        {
          id: 706,
          name: "Café + tostadas",
          description: "3 tostadas a elección (pan blanco / integral con semillas) + 2 dips a elección",
          price: "$10.500",
          image: "https://res.cloudinary.com/dbnvfqybv/image/upload/v1767873049/Caf%C3%A9_tostadas_mgdi6r.png",
          tags: [],
        },
      ],
    },
  ],
}
