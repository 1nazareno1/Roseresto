# Arquitectura del Proyecto - Menú Digital

## Principios fundamentales

La jerarquía del menú existe primero en los datos y luego es interpretada por la interfaz, nunca al revés.

## Estructura jerárquica

### 1. Categorías principales (nivel navegable)
- Son las únicas visibles en la navegación (drawer/header)
- Representan los grandes bloques del menú
- Ejemplos: Entradas, Principales, Pizzas, Postres, Bebidas, Panadería, Promociones
- **NO** se subdividen en el menú de navegación
- Optimizadas para minimizar complejidad en mobile

### 2. Subgrupos internos (nivel organizativo, NO navegable)
- Agrupan ítems para mejorar la organización visual dentro de una categoría
- Ejemplo: "Con alcohol" y "Sin alcohol" dentro de Bebidas
- **NO** aparecen en el menú de navegación
- **NO** son rutas independientes
- Se descubren mediante scroll dentro de la sección
- Se renderizan como bloques diferenciados visualmente (títulos, separación)

### 3. Ítems del menú (productos individuales)
- Representan productos individuales (platos, bebidas, etc.)
- Pertenecen a una categoría principal
- Pueden pertenecer implícitamente a un subgrupo
- Contienen solo información del producto (nombre, descripción, precio, imagen, propiedades)
- **NO** contienen lógica de navegación ni renderizado

## Separación de responsabilidades

### Datos (`/data/menu-data.ts`)
- Contienen únicamente información estructural del menú
- Define categorías, subgrupos e ítems
- Sin lógica de presentación
- Fácil de mantener y escalar

### Tipos (`/types/menu.ts`)
- Define las interfaces TypeScript
- Asegura consistencia en toda la aplicación
- Documentación clara de la estructura

### Assets (`/public/`)
- Imágenes organizadas por categoría (opcional: crear subdirectorios por categoría)
- Separadas de los datos
- Referencias mediante rutas relativas

### Componentes (`/components/`)
- Interpretan los datos y deciden cómo renderizar
- **NO** tienen datos hardcodeados
- Reciben todo por props
- Ejemplos:
  - `MenuDrawer`: muestra solo categorías principales
  - `MenuItems`: decide si renderizar subgrupos o ítems directos
  - `MenuHeader`: muestra categoría actual

## Principios de UX para mobile

1. **Navegación de un solo nivel**: Solo categorías principales en el menú
2. **Descubrimiento por scroll**: Los subgrupos se descubren navegando el contenido
3. **Jerarquía visual**: Se comunica con títulos, bloques, fondos (no con más navegación)
4. **Claridad**: La categoría actual siempre visible en el header

## Estructura de archivos

```
/
├── app/
│   ├── page.tsx                    # Página principal (orquesta componentes)
│   ├── layout.tsx                  # Layout principal
│   └── globals.css                 # Estilos globales
├── components/
│   ├── menu-header.tsx             # Header con categoría actual y menú hamburguesa
│   ├── menu-drawer.tsx             # Drawer lateral con categorías principales
│   ├── menu-items.tsx              # Renderiza ítems y subgrupos según datos
│   ├── menu-footer.tsx             # Footer del sitio
│   └── mui-theme-provider.tsx     # Configuración del tema Material-UI
├── data/
│   └── menu-data.ts                # Datos del menú (fuente única de verdad)
├── types/
│   └── menu.ts                     # Interfaces TypeScript
├── public/
│   └── *.jpg, *.png                # Imágenes de productos
└── ARCHITECTURE.md                 # Este archivo
```

## Cómo mantener el proyecto

### Agregar un nuevo ítem
1. Abre `/data/menu-data.ts`
2. Encuentra la categoría o subgrupo correspondiente
3. Agrega el nuevo objeto al array `items`
4. Sube la imagen a `/public/` si es necesaria

### Agregar un subgrupo
1. Abre `/data/menu-data.ts`
2. Encuentra la categoría
3. Cambia `hasSubgroups: true`
4. Agrega el subgrupo al array `subgroups`

### Agregar una nueva categoría
1. Importa el icono necesario en `/data/menu-data.ts`
2. Agrega la categoría al array `categories` del objeto `menuData`
3. Define si tendrá subgrupos o ítems directos

### Cambiar propiedades semánticas
1. Si necesitas nuevas propiedades (ej: "orgánico", "sin lactosa"):
   - Agrégalas a `ItemProperties` en `/types/menu.ts`
   - Actualiza el renderizado en `menu-items.tsx` con el chip correspondiente

## Decisiones de diseño

### ¿Por qué no usar rutas dinámicas?
Las categorías no son páginas separadas, son vistas dentro de la misma página. Esto simplifica la navegación mobile y mantiene el estado en un solo lugar.

### ¿Por qué los subgrupos no son navegables?
Para mobile-first, queremos minimizar niveles de navegación. Los subgrupos se descubren naturalmente al hacer scroll.

### ¿Por qué separar datos de componentes?
Facilita el mantenimiento: cambiar un precio o agregar un plato no requiere tocar código de componentes React.

## Escalabilidad futura

### Opción: Base de datos
Si el menú crece mucho, puedes mover `menu-data.ts` a una base de datos manteniendo las mismas interfaces TypeScript.

### Opción: CMS
Los datos pueden provenir de un CMS (Contentful, Sanity) sin cambiar la estructura de componentes.

### Opción: Múltiples idiomas
Agrega un objeto por idioma en `menu-data.ts` o usa i18n manteniendo la misma estructura.
