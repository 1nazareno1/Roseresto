import fs from "fs"
import path from "path"
import { v2 as cloudinary } from "cloudinary"

// Configurar Cloudinary
cloudinary.config({
  cloud_name: "dbnvfqybv",
  api_key: "122317189685368",
  api_secret: "ZBEr6zzM7Ugbj6drClq0vmL3New",
})

// Directorios de imágenes
const publicDir = path.join(process.cwd(), "public")
const categoriasDir = fs.readdirSync(publicDir).filter((f) => {
  const fullPath = path.join(publicDir, f)
  return fs.statSync(fullPath).isDirectory() && f !== "node_modules"
})

const imageMapping = {}

async function uploadImages() {
  console.log("🚀 Iniciando carga de imágenes a Cloudinary...\n")

  for (const categoria of categoriasDir) {
    const categoriaPath = path.join(publicDir, categoria)
    const files = fs.readdirSync(categoriaPath).filter((f) => {
      return /\.(jpg|jpeg|png|webp|gif)$/i.test(f)
    })

    console.log(`📁 Procesando categoría: ${categoria} (${files.length} imágenes)`)
    imageMapping[categoria] = {}

    for (const file of files) {
      const filePath = path.join(categoriaPath, file)
      const fileNameNoExt = path.parse(file).name
      const cloudinaryPath = `${categoria}/${fileNameNoExt}`

      try {
        console.log(`  ⏳ Subiendo: ${file}...`)
        const result = await cloudinary.uploader.upload(filePath, {
          public_id: cloudinaryPath,
          folder: categoria,
          overwrite: true,
          resource_type: "auto",
        })

        // Guardar solo el public_id para usar con CldImage
        imageMapping[categoria][file] = result.public_id
        console.log(`  ✅ ${file} -> ${result.public_id}`)
      } catch (error) {
        console.error(`  ❌ Error al subir ${file}:`, error.message)
      }
    }
    console.log("")
  }

  // Guardar mapeo en archivo
  const mappingPath = path.join(process.cwd(), "cloudinary-mapping.json")
  fs.writeFileSync(mappingPath, JSON.stringify(imageMapping, null, 2))
  console.log(`\n✨ Mapeo guardado en: cloudinary-mapping.json`)
  console.log("\n📋 Resumen:")
  Object.entries(imageMapping).forEach(([cat, images]) => {
    console.log(`  ${cat}: ${Object.keys(images).length} imágenes`)
  })
}

uploadImages().catch(console.error)
