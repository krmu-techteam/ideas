import * as fs from 'fs';
import * as path from 'path';

interface ImageStats {
  path: string;
  format: string;
  size: number;
}

const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.svg', '.webp', '.bmp', '.ico'];

function scanDirectory(dir: string, results: ImageStats[] = []): ImageStats[] {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      // Skip node_modules, .next, and other build directories
      if (!['node_modules', '.next', '.git', 'dist', 'build'].includes(file)) {
        scanDirectory(filePath, results);
      }
    } else {
      const ext = path.extname(file).toLowerCase();
      if (imageExtensions.includes(ext)) {
        results.push({
          path: filePath,
          format: ext.substring(1),
          size: stat.size
        });
      }
    }
  });

  return results;
}

function formatBytes(bytes: number): string {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i];
}

console.log('🔍 Scanning workspace for images...\n');

const images = scanDirectory('.');
const grouped = images.reduce((acc, img) => {
  if (!acc[img.format]) acc[img.format] = [];
  acc[img.format].push(img);
  return acc;
}, {} as Record<string, ImageStats[]>);

console.log('📊 Image Summary:\n');
console.log(`Total images found: ${images.length}\n`);

Object.entries(grouped).forEach(([format, imgs]) => {
  const totalSize = imgs.reduce((sum, img) => sum + img.size, 0);
  console.log(`${format.toUpperCase()}: ${imgs.length} files (${formatBytes(totalSize)})`);
});

console.log('\n📁 Images by location:\n');
Object.entries(grouped).forEach(([format, imgs]) => {
  console.log(`\n${format.toUpperCase()} files:`);
  imgs.forEach(img => {
    console.log(`  - ${img.path} (${formatBytes(img.size)})`);
  });
});

console.log('\n💡 Recommendations:\n');
const needsConversion = images.filter(img => ['jpg', 'jpeg', 'png'].includes(img.format));
if (needsConversion.length > 0) {
  console.log(`⚠️  ${needsConversion.length} images should be converted to WebP:`);
  needsConversion.forEach(img => {
    console.log(`   - ${img.path}`);
  });
  console.log(`\nRun: npx ts-node scripts/convert-images-to-webp.ts`);
} else {
  console.log('✅ All raster images are already in WebP format!');
}