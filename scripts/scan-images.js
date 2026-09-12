const fs = require('fs');
const path = require('path');

const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.svg', '.webp', '.bmp', '.ico'];

function scanDirectory(dir, results = []) {
  try {
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
      const filePath = path.join(dir, file);
      let stat;
      
      try {
        stat = fs.statSync(filePath);
      } catch (e) {
        return; // Skip files we can't access
      }

      if (stat.isDirectory()) {
        // Skip node_modules, .next, and other build directories
        if (!['node_modules', '.next', '.git', 'dist', 'build', 'out'].includes(file)) {
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
  } catch (error) {
    // Skip directories we can't access
  }

  return results;
}

function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i];
}

console.log('\n🔍 Scanning workspace for images...\n');

const images = scanDirectory('.');
const grouped = images.reduce((acc, img) => {
  if (!acc[img.format]) acc[img.format] = [];
  acc[img.format].push(img);
  return acc;
}, {});

console.log('📊 IMAGE SUMMARY:\n');
console.log(`Total images found: ${images.length}\n`);

// Summary by format
Object.entries(grouped).sort().forEach(([format, imgs]) => {
  const totalSize = imgs.reduce((sum, img) => sum + img.size, 0);
  console.log(`${format.toUpperCase().padEnd(6)}: ${imgs.length.toString().padStart(3)} files (${formatBytes(totalSize)})`);
});

console.log('\n' + '='.repeat(80) + '\n');

// Detailed list by format
console.log('📁 DETAILED IMAGE LIST:\n');
Object.entries(grouped).sort().forEach(([format, imgs]) => {
  console.log(`\n${format.toUpperCase()} FILES (${imgs.length}):`);
  imgs.forEach(img => {
    const relativePath = path.relative('.', img.path);
    console.log(`  • ${relativePath.padEnd(60)} ${formatBytes(img.size)}`);
  });
});

console.log('\n' + '='.repeat(80) + '\n');

// Recommendations
console.log('💡 RECOMMENDATIONS:\n');
const needsConversion = images.filter(img => ['jpg', 'jpeg', 'png'].includes(img.format));

if (needsConversion.length > 0) {
  const totalSize = needsConversion.reduce((sum, img) => sum + img.size, 0);
  console.log(`⚠️  ${needsConversion.length} images should be converted to WebP (Total: ${formatBytes(totalSize)}):\n`);
  
  const byFormat = needsConversion.reduce((acc, img) => {
    if (!acc[img.format]) acc[img.format] = [];
    acc[img.format].push(img);
    return acc;
  }, {});
  
  Object.entries(byFormat).forEach(([format, imgs]) => {
    console.log(`   ${format.toUpperCase()}: ${imgs.length} files`);
    imgs.forEach(img => {
      const relativePath = path.relative('.', img.path);
      console.log(`      - ${relativePath}`);
    });
    console.log('');
  });
  
  console.log(`\n🔧 To convert these images, run:`);
  console.log(`   node scripts/convert-images-to-webp.js`);
} else {
  console.log('✅ All raster images are already in WebP format!');
}

const svgFiles = grouped['svg'] || [];
if (svgFiles.length > 0) {
  console.log(`\nℹ️  ${svgFiles.length} SVG files found (no conversion needed - SVGs are already optimized)`);
}

console.log('\n' + '='.repeat(80) + '\n');
