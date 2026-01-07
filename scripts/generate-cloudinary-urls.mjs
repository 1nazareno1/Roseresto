import fs from "fs"

const mapping = JSON.parse(fs.readFileSync("cloudinary-mapping.json", "utf-8"))
const cloudName = "dbnvfqybv"

const urls = {}

Object.entries(mapping).forEach(([category, images]) => {
  urls[category] = {}
  Object.entries(images).forEach(([fileName, publicId]) => {
    const url = `https://res.cloudinary.com/${cloudName}/image/upload/${publicId}`
    urls[category][fileName] = url
  })
})

fs.writeFileSync("cloudinary-urls.json", JSON.stringify(urls, null, 2))
console.log("✅ URLs generadas en cloudinary-urls.json")
