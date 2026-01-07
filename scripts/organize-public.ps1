# Script para organizar las imágenes dentro de public por categoría
# Ejecutar desde el repositorio: powershell -ExecutionPolicy Bypass -File .\scripts\organize-public.ps1

$RepoRoot = Split-Path -Parent $PSScriptRoot
$Public = Join-Path $RepoRoot 'public'

$map = @{
    'Bebidas' = @(
        'craft-beer-ipa.png',
        'fresh-lemonade-mint.jpg',
        'red-wine-malbec-glass.jpg',
        
    )
    'Cafes' = @(
        'Té frutos rojos.webp',
        'Té oolong.webp'
        # Añadir aquí imágenes de `Cafes` si hay
    )
    'Entradas' = @(
        'Aceitunas marinadas.webp',
        'Adicional de papas.webp',
        'beef-carpaccio-elegant-plating.jpg',
        'bruschetta-caprese-gourmet.jpg',
        'caesar-salad-fresh-lettuce.jpg',
        'caesar-salad-fresh-restaurant.jpg',
        'cheese-board-gourmet-platter.jpg',
        'Chorizo seco.webp',
        'Croquetas de pollo.webp',
        'fried-calamari-crispy-golden.jpg',
        'fried-calamari-golden-crispy.jpg',
        'ham-croquettes-golden-crispy.jpg',
        'Mani tostado.webp',
        'Papas Rusticas.png',
        'Picada para empezar.png',
        'Porcion de papas.webp',
        'Provoletas.png',
        'Queso gouda.webp',
        'Rabas.webp'
    )
    'Panaderia' = @(
        'butter-croissant-french.jpg',
        'homemade-bread-with-seeds.jpg'
    )
    'Pizzas' = @(
        'four-cheese-pizza-gourmet.jpg',
        'margherita-pizza-classic-basil.jpg',
        'pepperoni-pizza-classic.jpg'
    )
    'Postres' = @(
        'chocolate-brownie-ice-cream.png',
        'tiramisu-italian-dessert.jpg'
    )
    'Principales' = @(
        'creamy-mushroom-risotto.jpg',
        'grilled-beef-steak-premium.jpg',
        'grilled-salmon-with-vegetables.jpg',
        'Ravioles fritos.webp'
    )
    'Promos' = @(
        'layout-Rose.png',
        'Rose inicio.png',
        'Rose-Resto.png'
    )
    'Otros' = @(
        'apple-icon.png',
        'icon-dark-32x32.png',
        'icon-light-32x32.png',
        'icon.svg',
        'placeholder-logo.png',
        'placeholder-logo.svg',
        'placeholder-user.jpg',
        'placeholder.jpg',
        'placeholder.svg',
        'descripci-n-de-la-imagen.jpg'
    )
}

foreach ($category in $map.Keys) {
    $dest = Join-Path $Public $category
    if (-not (Test-Path $dest)) { New-Item -Path $dest -ItemType Directory | Out-Null }
    foreach ($file in $map[$category]) {
        $src = Join-Path $Public $file
        if (Test-Path $src) {
            try {
                Move-Item -LiteralPath $src -Destination $dest -Force
                Write-Host "Moved: $file -> $category"
            } catch {
                Write-Warning ("No se pudo mover {0}: {1}" -f $file, $_)
            }
        } else {
            Write-Host "No encontrado: $file"
        }
    }
}

Write-Host "Organización completada. Revisa la carpeta 'public' y ajusta el mapeo si hace falta."