# WebP Image Conversion Guide

## Quick Start

### Option 1: Using the Provided Script

\`\`\`bash
# Install dependencies (if not already installed)
npm install

# Run the conversion script
npx ts-node scripts/convert-images-to-webp.ts
\`\`\`

### Option 2: Manual Batch Conversion

#### macOS/Linux

\`\`\`bash
# Install cwebp
brew install webp  # macOS
# or
sudo apt-get install webp  # Linux

# Convert all images in a directory
for file in public/images/*.{jpg,jpeg,png}; do
  [ -f "$file" ] && cwebp -q 80 -m 6 "$file" -o "${file%.*}.webp"
done

# Convert specific file
cwebp -q 80 -m 6 input.jpg -o output.webp
\`\`\`

#### Windows

1. Download cwebp from: https://developers.google.com/speed/webp/download
2. Extract to a folder
3. Open Command Prompt in that folder
4. Run:
   \`\`\`cmd
   cwebp -q 80 -m 6 input.jpg -o output.webp
   \`\`\`

## Quality Settings

| Quality | File Size | Use Case |
|---------|-----------|----------|
| 60-70 | Very Small | Thumbnails, low-priority images |
| 75-80 | Small | Most images, good balance |
| 85-90 | Medium | High-quality images |
| 95-100 | Large | Lossless, photography |

## Compression Levels

| Level | Speed | Compression |
|-------|-------|-------------|
| 0 | Fastest | Lowest |
| 3 | Fast | Low |
| 6 | Medium | High (Recommended) |
| 9 | Slow | Highest |

## Recommended Settings

\`\`\`bash
# For most images (balanced quality/size)
cwebp -q 80 -m 6 input.jpg -o output.webp

# For photography (higher quality)
cwebp -q 85 -m 6 input.jpg -o output.webp

# For thumbnails (smaller size)
cwebp -q 70 -m 6 input.jpg -o output.webp
\`\`\`

## Verify Conversion

\`\`\`bash
# Check file sizes
ls -lh public/images/*.webp

# Compare original vs WebP
du -sh public/images/*.jpg
du -sh public/images/*.webp

# Test WebP support in browser
# Open DevTools > Network tab
# Check Content-Type header for images
\`\`\`

## Troubleshooting

### cwebp command not found

**Solution:**
\`\`\`bash
# macOS
brew install webp

# Linux
sudo apt-get install webp

# Windows: Add to PATH or use full path
C:\path\to\cwebp.exe -q 80 input.jpg -o output.webp
\`\`\`

### Large file sizes after conversion

**Solution:** Reduce quality or increase compression level
\`\`\`bash
# Try lower quality
cwebp -q 70 -m 6 input.jpg -o output.webp

# Or higher compression
cwebp -q 80 -m 9 input.jpg -o output.webp
\`\`\`

### Images look blurry

**Solution:** Increase quality setting
\`\`\`bash
cwebp -q 85 -m 6 input.jpg -o output.webp
\`\`\`

## Batch Processing Script

Create `convert-all.sh`:

\`\`\`bash
#!/bin/bash

SOURCE_DIR="public/images"
QUALITY=80
COMPRESSION=6

echo "Converting images to WebP..."
count=0

for file in "$SOURCE_DIR"/*.{jpg,jpeg,png}; do
  if [ -f "$file" ]; then
    output="${file%.*}.webp"
    if [ ! -f "$output" ]; then
      echo "Converting: $file"
      cwebp -q $QUALITY -m $COMPRESSION "$file" -o "$output"
      ((count++))
    else
      echo "Skipping: $output (already exists)"
    fi
  fi
done

echo "Conversion complete! Converted $count images."
\`\`\`

Run with:
\`\`\`bash
chmod +x convert-all.sh
./convert-all.sh
\`\`\`

---

Last Updated: 2025-10-28
