import fs from "fs"
import path from "path"

const urls = JSON.parse(fs.readFileSync("cloudinary-urls.json", "utf-8"))

// Mapeo de categorías
const categoryMap = {
  "Entradas": "Entradas",
  "Bebidas": "Bebidas",
  "Principales": "Principales",
  "Pizzas": "Pizzas",
  "Postres": "Postres",
  "Panaderia": "Panaderia",
  "Cafes": "Cafes",
}

const menuFiles = [
  "data/Menu/Entradas.ts",
  "data/Menu/Bebidas.ts",
  "data/Menu/Principales.ts",
  "data/Menu/Pizzas.ts",
  "data/Menu/Postres.ts",
  "data/Menu/Panaderia.ts",
  "data/Menu/Cafes.ts",
]

menuFiles.forEach((filePath) => {
  const fullPath = path.resolve(filePath)
  if (!fs.existsSync(fullPath)) {
    console.log(`❌ Archivo no encontrado: ${filePath}`)
    return
  }

  let content = fs.readFileSync(fullPath, "utf-8")
  let updatedCount = 0

  // Reemplazar rutas de imagen
  Object.entries(categoryMap).forEach(([category, cloudCategory]) => {
    if (!urls[cloudCategory]) return

    Object.entries(urls[cloudCategory]).forEach(([fileName, cloudUrl]) => {
      const localPath = `/${category}/${fileName.replace(/\.[^.]+$/, "")}`
      // Buscar la ruta local en el archivo
      const imageRegex = new RegExp(`image: ["']${localPath.replace(/\./g, "\\.")}(\\.[^/"']+)?["']`, "g")
      
      if (imageRegex.test(content)) {
        content = content.replace(imageRegex, `image: "${cloudUrl}"`)
        updatedCount++
        console.log(`  ✓ ${fileName}`)
      }
    })
  })

  fs.writeFileSync(fullPath, content)
  console.log(`✅ ${filePath} - ${updatedCount} imágenes actualizadas\n`)
})

console.log("✅ Actualización completada")
