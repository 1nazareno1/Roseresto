# RoseResto - Menú Digital

Menú digital moderno para restaurante construido con Next.js y Material-UI.

Arquitectura escalable basada en separación de responsabilidades: datos → tipos → componentes.

## 📐 Arquitectura del Proyecto

Este proyecto sigue una arquitectura clara y escalable:

- **Categorías principales**: Navegables en el drawer/header (Entradas, Principales, Pizzas, etc.)
- **Subgrupos internos**: Organizan visualmente el contenido, NO son navegables (ej: "Con alcohol" / "Sin alcohol" en Bebidas)
- **Ítems individuales**: Productos del menú con sus propiedades

📖 **Lee [ARCHITECTURE.md](./ARCHITECTURE.md) para entender la arquitectura completa**

## 🚀 Cómo Mantener el Menú

### Agregar un Nuevo Plato

1. Abre `data/menu-data.ts`
2. Encuentra la categoría correspondiente
3. Agrega el nuevo objeto al array `items`:

```typescript
{
  id: 23,
  name: "Ensalada Griega",
  description: "Tomate, pepino, cebolla, aceitunas y queso feta",
  price: "$950",
  image: "/greek-salad.jpg",
  properties: {
    isVegetarian: true,
    isGlutenFree: true
  }
}
```

### Agregar un Subgrupo

Para organizar mejor una categoría con muchos ítems:

```typescript
{
  id: "bebidas",
  label: "Bebidas",
  icon: Wine({ size: 24, color: "#8B6F47" }),
  hasSubgroups: true, // <-- Cambiar a true
  subgroups: [
    {
      id: "cafes",
      label: "Cafés",
      items: [
        // tus ítems aquí
      ]
    },
    {
      id: "tes",
      label: "Tés",
      items: [
        // tus ítems aquí
      ]
    }
  ]
}
```

### Agregar una Nueva Categoría

1. Importa el icono en `data/menu-data.ts`:
```typescript
import { TrendingUp } from "lucide-react"
```

2. Agrégala al array `categories`:
```typescript
{
  id: "especiales",
  label: "Especiales del Chef",
  icon: TrendingUp({ size: 24, color: "#8B6F47" }),
  hasSubgroups: false,
  items: [
    // tus platos especiales aquí
  ]
}
```

## 🏷️ Propiedades Disponibles

Las propiedades semánticas se definen en el objeto `properties` de cada ítem:

- `isVegetarian` - Muestra chip verde con ícono de hoja
- `isSpicy` - Muestra chip rojo con ícono de fuego
- `isAlcoholic` - Muestra chip morado con ícono de copa
- `isGlutenFree` - Muestra chip azul con ícono sin gluten
- `isNew` - Muestra chip amarillo con ícono de estrella

Ejemplo:
```typescript
properties: {
  isVegetarian: true,
  isSpicy: true,
  isNew: true
}
```

## 🖼️ Gestión de Imágenes

Las imágenes se guardan en `/public/`:

```
/public/
  ├── caesar-salad.jpg
  ├── grilled-salmon.jpg
  └── tiramisu.jpg
```

Referencia en el código:
```typescript
image: "/caesar-salad.jpg"
```

Para agregar placeholders temporales:
```typescript
image: "/placeholder.svg?height=300&width=400"
```

## 📁 Estructura de Archivos

```
/
├── data/
│   └── menu-data.ts          # ⭐ DATOS DEL MENÚ (edita aquí)
├── types/
│   └── menu.ts               # Interfaces TypeScript
├── components/
│   ├── menu-header.tsx       # Header con categoría actual
│   ├── menu-drawer.tsx       # Drawer lateral con navegación
│   ├── menu-items.tsx        # Renderiza ítems y subgrupos
│   └── menu-footer.tsx       # Footer del sitio
├── app/
│   ├── page.tsx              # Página principal
│   └── globals.css           # Estilos y tema
└── public/                   # Imágenes de productos
```

## 🎨 Personalización

### Cambiar Colores del Tema

Edita `app/globals.css`:

```css
@theme inline {
  --color-primary: #8B6F47;      /* Color principal (marrón) */
  --color-secondary: #E6D5C3;    /* Color secundario (crema) */
  /* ... más colores */
}
```

También edita `components/mui-theme-provider.tsx` para los colores de Material-UI.

### Cambiar Tipografía

Edita `app/layout.tsx` para importar diferentes fuentes de Google Fonts.

## 🔧 Tecnologías

- **Next.js 16** - Framework React con App Router
- **Material-UI (MUI)** - Componentes de UI
- **TypeScript** - Tipado estático
- **Lucide React** - Iconos
- **Tailwind CSS v4** - Estilos utility-first

## 📱 Responsive Design

El menú está optimizado para mobile-first:
- Navegación simple de un solo nivel
- Drawer lateral para categorías
- Cards responsivas con imágenes
- Touch-friendly para dispositivos móviles

## ⚡ Comandos

```bash
# Instalar dependencias
npm install

# Desarrollo
npm run dev

# Build para producción
npm run build

# Iniciar en producción
npm start
```

## 📚 Documentación Adicional

- [ARCHITECTURE.md](./ARCHITECTURE.md) - Arquitectura completa del proyecto
- [Material-UI Docs](https://mui.com/) - Documentación de componentes
- [Next.js Docs](https://nextjs.org/docs) - Documentación de Next.js

## 🤝 Contribuir

Para mantener la consistencia del proyecto:

1. Lee [ARCHITECTURE.md](./ARCHITECTURE.md) primero
2. Respeta la separación de responsabilidades
3. No hardcodees datos en componentes
4. Usa las interfaces TypeScript definidas
5. Mantén los comentarios actualizados

---

**Nota**: Este proyecto fue diseñado para ser fácil de mantener. Todos los datos del menú están en un solo lugar (`data/menu-data.ts`) y los componentes solo interpretan esos datos.
