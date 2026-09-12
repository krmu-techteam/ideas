# IDEAS 3.0 - Performance Optimization & Deployment Guide

## Overview
This guide provides step-by-step instructions for optimizing your Next.js site for cPanel hosting with WebP images and static export.

## Table of Contents
1. [Image Optimization](#image-optimization)
2. [Build Configuration](#build-configuration)
3. [cPanel Deployment](#cpanel-deployment)
4. [Performance Checklist](#performance-checklist)
5. [Troubleshooting](#troubleshooting)

---

## Image Optimization

### Step 1: Install WebP Conversion Tools

**macOS:**
\`\`\`bash
brew install webp
\`\`\`

**Linux (Ubuntu/Debian):**
\`\`\`bash
sudo apt-get install webp
\`\`\`

**Windows:**
Download from: https://developers.google.com/speed/webp/download

### Step 2: Convert Images to WebP

**Option A: Using the provided script**
\`\`\`bash
npx ts-node scripts/convert-images-to-webp.ts
\`\`\`

**Option B: Manual conversion using cwebp**
\`\`\`bash
# Single file
cwebp -q 80 -m 6 input.jpg -o output.webp

# Batch conversion (macOS/Linux)
for file in public/images/*.{jpg,png}; do
  cwebp -q 80 -m 6 "$file" -o "${file%.*}.webp"
done
\`\`\`

### Step 3: Verify WebP Files

\`\`\`bash
# List all WebP files
find public -name "*.webp" -type f

# Check file sizes
du -sh public/images/*.webp
\`\`\`

### Image Format Guidelines

| Format | Use Case | Quality | Size |
|--------|----------|---------|------|
| WebP | All modern browsers | 75-85 | Smallest |
| PNG | Fallback, transparency | 100 | Medium |
| JPG | Fallback, photos | 80 | Medium-Large |

---

## Build Configuration

### Step 1: Update next.config.mjs

The configuration is already optimized for static export:
- `output: 'export'` - Enables static HTML export
- `images.unoptimized: true` - Required for static export
- Compression and caching headers configured

### Step 2: Build the Project

\`\`\`bash
# Install dependencies
npm install
# or
pnpm install

# Build for static export
npm run build
# or
pnpm build

# Output will be in the 'out' directory
\`\`\`

### Step 3: Verify Build Output

\`\`\`bash
# Check the out directory
ls -la out/

# Verify all assets are present
find out -type f | wc -l
\`\`\`

---

## cPanel Deployment

### Step 1: Prepare Files

1. Build your project locally:
   \`\`\`bash
   npm run build
   \`\`\`

2. The `out/` directory contains your static site

3. Compress for upload:
   \`\`\`bash
   zip -r ideas-3.0.zip out/
   \`\`\`

### Step 2: Upload to cPanel

**Method 1: Using cPanel File Manager**
1. Log in to cPanel
2. Go to File Manager
3. Navigate to `public_html`
4. Upload `ideas-3.0.zip`
5. Extract the ZIP file
6. Move contents from `out/` to `public_html/`

**Method 2: Using FTP**
1. Connect via FTP client (FileZilla, WinSCP, etc.)
2. Upload the `out/` directory contents to `public_html/`
3. Ensure all files are readable (permissions 644 for files, 755 for directories)

**Method 3: Using SSH (if available)**
\`\`\`bash
# Connect to server
ssh username@yourdomain.com

# Navigate to public_html
cd public_html

# Upload and extract
unzip ideas-3.0.zip
mv out/* .
rm -rf out/
\`\`\`

### Step 3: Configure .htaccess

1. Upload the `.htaccess` file to `public_html/`
2. Ensure it's readable (permissions 644)
3. This file handles:
   - GZIP/Brotli compression
   - Browser caching
   - URL rewriting for Next.js
   - Security headers

### Step 4: Set File Permissions

\`\`\`bash
# Via SSH
chmod 644 public_html/.htaccess
chmod 644 public_html/*.html
chmod 755 public_html/_next
chmod -R 644 public_html/_next/*
\`\`\`

### Step 5: Verify Deployment

1. Visit your domain: `https://yourdomain.com`
2. Check browser console for errors
3. Verify images load (should be WebP)
4. Test all navigation links

---

## Performance Checklist

### Before Deployment

- [ ] All images converted to WebP
- [ ] PNG/JPG fallbacks available
- [ ] Build completes without errors
- [ ] `out/` directory contains all files
- [ ] `.htaccess` file is present
- [ ] File permissions are correct (644 for files, 755 for directories)

### After Deployment

- [ ] Site loads in under 2 seconds
- [ ] Images display correctly
- [ ] Navigation works on all pages
- [ ] Mobile responsive design works
- [ ] No console errors
- [ ] Lighthouse score > 80

### Performance Optimization Tips

1. **Image Optimization**
   - Use WebP for all images
   - Compress images before conversion
   - Use appropriate dimensions (don't serve 4000px images for 400px displays)

2. **Caching**
   - Browser cache: 1 year for images, 1 month for CSS/JS
   - HTML cache: 1 day (allows updates)
   - .htaccess handles this automatically

3. **Compression**
   - Enable GZIP in cPanel (usually enabled by default)
   - .htaccess enables Brotli if available
   - Reduces file sizes by 60-80%

4. **Lazy Loading**
   - Images load only when needed
   - Reduces initial page load time
   - Implemented in OptimizedImage component

5. **Code Splitting**
   - Components lazy-loaded on scroll
   - Reduces initial JavaScript bundle
   - Already implemented in hero-section.tsx

---

## Lighthouse Performance Targets

| Metric | Target | Current |
|--------|--------|---------|
| First Contentful Paint (FCP) | < 1.8s | - |
| Largest Contentful Paint (LCP) | < 2.5s | - |
| Cumulative Layout Shift (CLS) | < 0.1 | - |
| Time to Interactive (TTI) | < 3.8s | - |

---

## Troubleshooting

### Issue: Images not loading

**Solution:**
1. Check file paths in components
2. Verify WebP files exist in `public/`
3. Check browser console for 404 errors
4. Ensure file permissions are correct (644)

### Issue: Site shows 404 errors

**Solution:**
1. Verify `.htaccess` is in `public_html/`
2. Check that `index.html` exists in `public_html/`
3. Ensure mod_rewrite is enabled in cPanel
4. Check cPanel error logs

### Issue: Slow page load

**Solution:**
1. Verify GZIP compression is enabled
2. Check image file sizes (should be < 100KB each)
3. Use browser DevTools to identify slow resources
4. Consider reducing image dimensions

### Issue: WebP images not displaying

**Solution:**
1. Verify WebP files were created correctly
2. Check browser support (all modern browsers support WebP)
3. Ensure fallback PNG/JPG files exist
4. Check file permissions

### Issue: CSS/JS not loading

**Solution:**
1. Check that `_next/` directory exists in `public_html/`
2. Verify file permissions (755 for directories, 644 for files)
3. Check browser console for specific file paths
4. Ensure relative paths are correct

---

## Monitoring & Maintenance

### Regular Tasks

1. **Weekly:**
   - Monitor site performance
   - Check error logs in cPanel

2. **Monthly:**
   - Review Lighthouse scores
   - Update content as needed
   - Check for broken links

3. **Quarterly:**
   - Optimize new images
   - Review and update caching strategy
   - Backup site files

### Performance Monitoring Tools

- **Google Lighthouse:** https://developers.google.com/web/tools/lighthouse
- **GTmetrix:** https://gtmetrix.com
- **WebPageTest:** https://www.webpagetest.org
- **cPanel Analytics:** Built-in cPanel statistics

---

## Additional Resources

- [Next.js Static Export](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [WebP Format Guide](https://developers.google.com/speed/webp)
- [cPanel Documentation](https://documentation.cpanel.net/)
- [Web Performance Best Practices](https://web.dev/performance/)

---

## Support

For issues or questions:
1. Check the Troubleshooting section above
2. Review cPanel error logs
3. Test locally before deploying
4. Use browser DevTools to debug

Last Updated: 2025-10-28
