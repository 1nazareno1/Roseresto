# RoseResto - Menú Digital

Menú digital moderno para restaurante construido con Next.js y Material-UI.

## Cómo Agregar Nuevos Platos

Para agregar nuevos platos al menú, edita el archivo `data/menu-data.ts`:

### Estructura de un Plato

```typescript
{
  id: número único,
  name: "Nombre del Plato",
  description: "Descripción detallada del plato",
  price: "$precio",
  image: "/placeholder.svg?height=300&width=400",
  tags: ["Vegetariano"], // opcional
  isVegetarian: true, // opcional - muestra chip verde
  isSpicy: true, // opcional - muestra chip rojo
}
```

### Ejemplo de Cómo Agregar un Plato

1. Abre `data/menu-data.ts`
2. Busca la categoría donde quieres agregar el plato (entradas, principales, pizzas, etc.)
3. Agrega el nuevo objeto al final del array:

```typescript
panaderia: [
  {
    id: 22,
    name: "Facturas Surtidas",
    description: "Media docena de facturas recién horneadas",
    price: "$900",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["Vegetariano"],
    isVegetarian: true,
  },
],
```

## Categorías Disponibles

- `entradas` - Entradas
- `principales` - Platos Principales
- `pizzas` - Pizzas
- `postres` - Postres
- `bebidas` - Bebidas
- `panaderia` - Panadería

## Personalización

### Cambiar Colores
Edita `app/globals.css` para modificar la paleta de colores.

### Agregar Categorías
Edita `app/page.tsx` para agregar nuevas categorías al array `categories`.
