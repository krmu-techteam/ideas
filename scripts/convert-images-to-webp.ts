/**
 * Image Conversion Script
 * Converts all JPG and PNG images to WebP format
 *
 * Usage:
 * npx ts-node scripts/convert-images-to-webp.ts
 *
 * Requirements:
 * - Install cwebp: brew install webp (macOS) or apt-get install webp (Linux)
 * - Or use: npm install cwebp-bin
 */

import fs from "fs"
import path from "path"
import { execSync } from "child_process"

const PUBLIC_DIR = path.join(process.cwd(), "public")
const SUPPORTED_FORMATS = [".jpg", ".jpeg", ".png"]

function getAllImages(dir: string): string[] {
  const files: string[] = []

  function walk(currentPath: string) {
    const entries = fs.readdirSync(currentPath, { withFileTypes: true })

    for (const entry of entries) {
      const fullPath = path.join(currentPath, entry.name)

      if (entry.isDirectory()) {
        walk(fullPath)
      } else if (entry.isFile()) {
        const ext = path.extname(entry.name).toLowerCase()
        if (SUPPORTED_FORMATS.includes(ext)) {
          files.push(fullPath)
        }
      }
    }
  }

  walk(dir)
  return files
}

function convertToWebP(imagePath: string): boolean {
  const webpPath = imagePath.replace(/\.(jpg|jpeg|png)$/i, ".webp")

  // Skip if WebP already exists
  if (fs.existsSync(webpPath)) {
    console.log(`✓ WebP already exists: ${webpPath}`)
    return true
  }

  try {
    // Using cwebp command line tool
    // Adjust quality (0-100) and compression (0-6) as needed
    execSync(`cwebp -q 80 -m 6 "${imagePath}" -o "${webpPath}"`, {
      stdio: "pipe",
    })
    console.log(`✓ Converted: ${imagePath} → ${webpPath}`)
    return true
  } catch (error) {
    console.error(`✗ Failed to convert: ${imagePath}`)
    console.error(error)
    return false
  }
}

async function main() {
  console.log("🖼️  Starting image conversion to WebP...\n")

  if (!fs.existsSync(PUBLIC_DIR)) {
    console.error(`❌ Public directory not found: ${PUBLIC_DIR}`)
    process.exit(1)
  }

  const images = getAllImages(PUBLIC_DIR)

  if (images.length === 0) {
    console.log("ℹ️  No images found to convert")
    return
  }

  console.log(`Found ${images.length} image(s) to convert\n`)

  let converted = 0
  let failed = 0

  for (const imagePath of images) {
    if (convertToWebP(imagePath)) {
      converted++
    } else {
      failed++
    }
  }

  console.log(`\n✅ Conversion complete!`)
  console.log(`   Converted: ${converted}`)
  console.log(`   Failed: ${failed}`)
  console.log(`   Total: ${images.length}`)
}

main().catch(console.error)
