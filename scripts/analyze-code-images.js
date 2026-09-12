const fs = require('fs');
const path = require('path');

// Regex patterns to find image references in code
const patterns = [
  /['"`]([^'"`]*\.(?:jpg|jpeg|png|webp|svg|gif|bmp|ico))['"]/gi,
  /src\s*[:=]\s*['"`]([^'"`]*)['"]/gi,
  /image\s*[:=]\s*['"`]([^'"`]*)['"]/gi,
  /url\(['"`]([^'"`]*\.(?:jpg|jpeg|png|webp|svg|gif|bmp|ico))['"`]\)/gi,
];

const imageExtensions = ['.jpg', '.jpeg', '.png', '.webp', '.svg', '.gif', '.bmp', '.ico'];

function isImagePath(str) {
  return imageExtensions.some(ext => str.toLowerCase().endsWith(ext));
}

function scanCodeFiles(dir, results = new Set()) {
  try {
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
      const filePath = path.join(dir, file);
      let stat;
      
      try {
        stat = fs.statSync(filePath);
      } catch (e) {
        return;
      }

      if (stat.isDirectory()) {
        if (!['node_modules', '.next', '.git', 'dist', 'build', 'out'].includes(file)) {
          scanCodeFiles(filePath, results);
        }
      } else if (/\.(tsx?|jsx?|css|scss|json)$/.test(file)) {
        try {
          const content = fs.readFileSync(filePath, 'utf8');
          
          // Search for image paths
          patterns.forEach(pattern => {
            const matches = content.matchAll(new RegExp(pattern));
            for (const match of matches) {
              const imagePath = match[1];
              if (imagePath && (isImagePath(imagePath) || imagePath.includes('/assets/') || imagePath.includes('/images/'))) {
                // Clean up the path
                const cleanPath = imagePath.split('?')[0].split('#')[0];
                if (isImagePath(cleanPath) || cleanPath.includes('/assets/') || cleanPath.includes('/images/')) {
                  results.add(JSON.stringify({
                    imagePath: cleanPath,
                    file: path.relative('.', filePath),
                    line: content.substring(0, match.index).split('\n').length
                  }));
                }
              }
            }
          });
        } catch (e) {
          // Skip files we can't read
        }
      }
    });
  } catch (error) {
    // Skip directories we can't access
  }

  return results;
}

function getImageFormat(imagePath) {
  const ext = path.extname(imagePath).toLowerCase().replace('.', '');
  return ext || 'unknown';
}

console.log('\n🔍 SCANNING CODE FOR IMAGE REFERENCES...\n');
console.log('=' .repeat(80));

const imageRefs = Array.from(scanCodeFiles('.')).map(str => JSON.parse(str));

// Group by image path
const grouped = imageRefs.reduce((acc, ref) => {
  if (!acc[ref.imagePath]) {
    acc[ref.imagePath] = [];
  }
  acc[ref.imagePath].push({ file: ref.file, line: ref.line });
  return acc;
}, {});

// Categorize images
const byFormat = {};
const missingImages = [];
const foundImages = [];

Object.entries(grouped).forEach(([imagePath, refs]) => {
  const format = getImageFormat(imagePath);
  
  if (!byFormat[format]) byFormat[format] = [];
  byFormat[format].push({ path: imagePath, references: refs });
  
  // Check if image exists
  const publicPath = path.join('public', imagePath.replace(/^\//, ''));
  const exists = fs.existsSync(publicPath);
  
  if (!exists) {
    missingImages.push({ path: imagePath, references: refs, format });
  } else {
    foundImages.push({ path: imagePath, references: refs, format });
  }
});

console.log('\n📊 IMAGE REFERENCES SUMMARY:\n');
console.log(`Total unique image paths referenced: ${Object.keys(grouped).length}`);
console.log(`Existing images: ${foundImages.length}`);
console.log(`Missing images: ${missingImages.length}\n`);

console.log('BY FORMAT:\n');
Object.entries(byFormat).sort().forEach(([format, images]) => {
  const totalRefs = images.reduce((sum, img) => sum + img.references.length, 0);
  console.log(`  ${format.toUpperCase().padEnd(8)}: ${images.length.toString().padStart(3)} unique paths (${totalRefs} total references)`);
});

console.log('\n' + '='.repeat(80));

// Detailed breakdown by format
console.log('\n📁 DETAILED BREAKDOWN BY FORMAT:\n');

Object.entries(byFormat).sort().forEach(([format, images]) => {
  console.log(`\n${format.toUpperCase()} (${images.length} images):`);
  console.log('-'.repeat(80));
  
  images.forEach(img => {
    const exists = fs.existsSync(path.join('public', img.path.replace(/^\//, '')));
    const status = exists ? '✅' : '❌';
    console.log(`\n  ${status} ${img.path}`);
    console.log(`     Referenced ${img.references.length} time(s) in:`);
    img.references.slice(0, 3).forEach(ref => {
      console.log(`       - ${ref.file}:${ref.line}`);
    });
    if (img.references.length > 3) {
      console.log(`       ... and ${img.references.length - 3} more file(s)`);
    }
  });
});

console.log('\n' + '='.repeat(80));

// Missing images report
if (missingImages.length > 0) {
  console.log('\n⚠️  MISSING IMAGES THAT NEED TO BE ADDED:\n');
  
  const byFormatMissing = missingImages.reduce((acc, img) => {
    if (!acc[img.format]) acc[img.format] = [];
    acc[img.format].push(img);
    return acc;
  }, {});
  
  Object.entries(byFormatMissing).sort().forEach(([format, images]) => {
    console.log(`\n${format.toUpperCase()} - ${images.length} missing:`);
    images.forEach(img => {
      console.log(`  ❌ ${img.path}`);
      console.log(`     Expected location: public${img.path}`);
      console.log(`     Used in: ${img.references[0].file}:${img.references[0].line}`);
      if (img.references.length > 1) {
        console.log(`     ... and ${img.references.length - 1} more location(s)`);
      }
    });
  });
}

console.log('\n' + '='.repeat(80));

// WebP conversion recommendations
console.log('\n💡 WEBP CONVERSION RECOMMENDATIONS:\n');

const needsWebP = Object.entries(byFormat)
  .filter(([format]) => ['jpg', 'jpeg', 'png'].includes(format))
  .reduce((sum, [_, images]) => sum + images.length, 0);

const alreadyWebP = (byFormat['webp'] || []).length;

console.log(`✅ Images already in WebP format: ${alreadyWebP}`);
console.log(`⚠️  Images that should use WebP: ${needsWebP}\n`);

if (needsWebP > 0) {
  ['png', 'jpg', 'jpeg'].forEach(format => {
    if (byFormat[format]) {
      console.log(`\n${format.toUpperCase()} images (${byFormat[format].length}):`);
      byFormat[format].forEach(img => {
        const exists = fs.existsSync(path.join('public', img.path.replace(/^\//, '')));
        const status = exists ? '📁 EXISTS' : '❌ MISSING';
        console.log(`  ${status} - ${img.path}`);
      });
    }
  });
  
  console.log(`\n🔧 RECOMMENDATION:`);
  console.log(`   1. Add the missing images to your public folder`);
  console.log(`   2. Convert PNG/JPG images to WebP format`);
  console.log(`   3. Update code references to use .webp extensions`);
  console.log(`   4. Keep SVG files as-is (already optimized)\n`);
}

console.log('\n' + '='.repeat(80));

// Summary statistics
console.log('\n📈 STATISTICS:\n');

const totalReferences = imageRefs.length;
const uniquePaths = Object.keys(grouped).length;
const avgRefsPerImage = (totalReferences / uniquePaths).toFixed(2);

console.log(`  Total image references in code: ${totalReferences}`);
console.log(`  Unique image paths: ${uniquePaths}`);
console.log(`  Average references per image: ${avgRefsPerImage}`);
console.log(`  Files actually present in public/: ${foundImages.length}`);
console.log(`  Files missing from public/: ${missingImages.length}`);

const svgCount = (byFormat['svg'] || []).length;
const webpCount = (byFormat['webp'] || []).length;
const pngCount = (byFormat['png'] || []).length;
const jpgCount = ((byFormat['jpg'] || []).length + (byFormat['jpeg'] || []).length);

console.log(`\n  Format Distribution:`);
console.log(`    WebP: ${webpCount} (${((webpCount/uniquePaths)*100).toFixed(1)}%)`);
console.log(`    SVG:  ${svgCount} (${((svgCount/uniquePaths)*100).toFixed(1)}%)`);
console.log(`    PNG:  ${pngCount} (${((pngCount/uniquePaths)*100).toFixed(1)}%)`);
console.log(`    JPG:  ${jpgCount} (${((jpgCount/uniquePaths)*100).toFixed(1)}%)`);

console.log('\n' + '='.repeat(80) + '\n');
