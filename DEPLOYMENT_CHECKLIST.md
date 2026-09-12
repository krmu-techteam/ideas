# IDEAS 3.0 - Pre-Deployment Checklist

## Image Optimization

- [ ] All JPG/PNG images converted to WebP format
- [ ] WebP files verified in `/public/images/` directory
- [ ] Original JPG/PNG files kept as fallback
- [ ] Image file sizes optimized (< 100KB each)
- [ ] Responsive image sizes created (if needed)

## Build & Testing

- [ ] `npm run build` completes without errors
- [ ] `out/` directory contains all static files
- [ ] All pages render correctly in `out/` directory
- [ ] Navigation links work in static build
- [ ] Images display correctly (WebP with fallback)
- [ ] No console errors in browser DevTools
- [ ] Mobile responsive design verified
- [ ] Lighthouse score > 80 on desktop
- [ ] Lighthouse score > 70 on mobile

## File Preparation

- [ ] `.htaccess` file created and configured
- [ ] All files have correct permissions (644 for files, 755 for directories)
- [ ] `public_html/` directory is empty or backed up
- [ ] ZIP file created: `ideas-3.0.zip` containing `out/` contents

## cPanel Deployment

- [ ] SSH/FTP access verified
- [ ] cPanel File Manager accessible
- [ ] Backup of existing site created
- [ ] `ideas-3.0.zip` uploaded to `public_html/`
- [ ] ZIP file extracted successfully
- [ ] Contents moved from `out/` to `public_html/` root
- [ ] `.htaccess` file in place with correct permissions
- [ ] `index.html` exists in `public_html/`
- [ ] `_next/` directory exists with all assets

## Server Configuration

- [ ] GZIP compression enabled in cPanel
- [ ] Brotli compression enabled (if available)
- [ ] mod_rewrite enabled in cPanel
- [ ] File permissions set correctly:
  - [ ] Files: 644
  - [ ] Directories: 755
  - [ ] `.htaccess`: 644

## Post-Deployment Verification

- [ ] Domain loads successfully
- [ ] Homepage displays correctly
- [ ] All images load (check Network tab in DevTools)
- [ ] Navigation works on all pages
- [ ] Mobile menu functions properly
- [ ] Forms submit correctly
- [ ] No 404 errors in console
- [ ] No mixed content warnings (HTTPS)
- [ ] Page load time < 2 seconds
- [ ] Lighthouse audit passed

## Performance Monitoring

- [ ] Set up Google Analytics
- [ ] Monitor Core Web Vitals
- [ ] Check cPanel error logs weekly
- [ ] Monitor bandwidth usage
- [ ] Set up uptime monitoring

## Maintenance

- [ ] Document deployment process
- [ ] Create backup schedule
- [ ] Plan for future updates
- [ ] Monitor performance metrics
- [ ] Update content as needed

---

## Quick Deployment Commands

\`\`\`bash
# Build the project
npm run build

# Create deployment ZIP
cd out
zip -r ../ideas-3.0.zip .
cd ..

# Upload to cPanel via FTP
# 1. Connect to FTP
# 2. Navigate to public_html
# 3. Upload ideas-3.0.zip
# 4. Extract ZIP
# 5. Move contents to public_html root

# Or via SSH
ssh username@yourdomain.com
cd public_html
unzip ideas-3.0.zip
mv out/* .
rm -rf out/
chmod 644 .htaccess
chmod -R 755 _next
chmod -R 644 _next/*
\`\`\`

---

Last Updated: 2025-10-28
