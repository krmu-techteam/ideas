# 📸 IMAGE REQUIREMENTS - IDEAS 3.0 Website

## ✅ Code Updated to WebP Format

All image references in the code have been updated from PNG/JPG to **WebP** format for faster loading and better performance.

---

## 📁 Required Directory Structure

Create the following folders in your `public` directory:

```
public/
├── images/
└── assets/
    ├── upcoming-events/
    └── incubation-hub/
```

**PowerShell Commands:**
```powershell
mkdir public\images -Force
mkdir public\assets\upcoming-events -Force
mkdir public\assets\incubation-hub -Force
```

---

## 🖼️ Images to Add (51 Total)

### 1️⃣ **Root Level - Logos & Branding (PNG - Keep for compatibility)**
These should remain PNG for maximum compatibility with browsers and devices:

```
public/
├── university-logo.png         ← University logo (favicon, meta tags)
├── IDEAS_LOGO2.png            ← Main IDEAS logo
├── IDEAS 1.0.webp             ← Timeline image (WebP for fast load)
├── IDEAS 2.0.webp             ← Timeline image (WebP for fast load)
├── IDEAS 3.0.webp             ← Timeline image (WebP for fast load)
├── yashraj.webp               ← Developer photo (WebP)
├── piyush.webp                ← Developer photo (WebP)
└── placeholder.svg            ✅ Already exists
```

### 2️⃣ **Images Folder - Additional Logos (PNG + WebP)**

```
public/images/
├── university-logo.png         ← Duplicate for header/footer
├── IMG_2787.webp              ← Image slider
├── IMG_2791.webp              ← Image slider
├── IMG_2825.webp              ← Image slider
└── IMG_3009.webp              ← Image slider
```

### 3️⃣ **Event Images (WebP) - 27 images**

All event images should be in **WebP format** for optimal performance:

```
public/assets/upcoming-events/
├── up-ev-1.webp    (Drone Obstacle Crossing)
├── up-ev-2.webp    (Crime Scene Investigation / AI & Robotics)
├── up-ev-3.webp    (Agritech - Smart Farming)
├── up-ev-4.webp    (Robots Race / Pharmaceutical)
├── up-ev-5.webp    (Gaming Arena)
├── up-ev-6.webp    (Zero Waste Innovation)
├── up-ev-7.webp    (Chemistry: Real Magic)
├── up-ev-8.webp    (Business Quiz)
├── up-ev-9.webp    (React to Situation / Legal)
├── up-ev-10.webp   (Soap Carving)
├── up-ev-11.webp   (Ad Mad Show)
├── up-ev-12.webp   (Debate Competition)
├── up-ev-13.webp   (ReelBaaz)
├── up-ev-14.webp   (Rangoli Making / Community)
├── up-ev-15.webp   (Cartoon Craze)
├── up-ev-16.webp   (Clickkarr / Photography)
├── up-ev-17.webp   (Science Quiz / Smart Farming)
├── up-ev-18.webp   (Story Spinner)
├── up-ev-19.webp   (Poster Making / Legal)
├── up-ev-20.webp   (Tech Treasure Hunt)
├── up-ev-25.webp   (Group Dance)
├── up-ev-26.webp   (Duet Dance)
├── up-ev-27.webp   (Duet Singing)
├── ex-2.webp       (Live Performances)
├── ex-4.webp       (Physical Endurance)
└── ex-5.webp       (Creative Slogan)
```

### 4️⃣ **Incubation Hub Images (WebP) - 3 images**

```
public/assets/incubation-hub/
├── in-win-1.webp   (Smart Water Purifier)
├── in-win-2.webp   (Solar-Powered Agri-Bot)
└── in-win-3.webp   (AR Learning Platform)
```

---

## 🎯 Format Strategy

### ✅ Use PNG for:
- **Favicons** (`university-logo.png`)
- **Main logos** that need maximum compatibility
- **Meta tags** (og:image)
- Total: **2 files**

### 🚀 Use WebP for:
- **All event images** (27 files)
- **Timeline images** (3 files)
- **Team photos** (2 files)
- **Image sliders** (4 files)
- **Incubation hub** (3 files)
- Total: **39 files**

### 📐 Use SVG for:
- **Placeholders** (already exists)
- **Icons** (vector graphics)
- Total: **1 file** ✅

---

## 📊 Performance Benefits

| Format | File Size (avg) | Loading Speed | Browser Support |
|--------|----------------|---------------|-----------------|
| PNG    | 100% baseline  | Slowest       | 100%            |
| JPG    | 80% of PNG     | Slow          | 100%            |
| **WebP** | **25-35% of PNG** | **3x faster** | **98%** |
| SVG    | Smallest       | Instant       | 100%            |

---

## 🔧 Files Modified

### ✅ Updated to WebP:
1. ✅ `lib/data/events.ts` - Event image mappings
2. ✅ `lib/data/ideas-events.ts` - IDEAS track images
3. ✅ `components/upcoming-events.tsx` - Event cards
4. ✅ `components/incubation-hub.tsx` - Incubation projects
5. ✅ `components/footer.tsx` - Team photos
6. ✅ `components/hero-section.tsx` - Timeline images
7. ✅ `components/event-timeline.tsx` - Timeline data

### 🔒 Kept as PNG (for compatibility):
- `app/layout.tsx` - Favicon references
- `components/header.tsx` - Logo references
- `lib/seo/metadata.ts` - OG image
- `lib/seo/structured-data.ts` - Schema logo

---

## ⚡ Quick Setup Checklist

- [ ] Create folder structure
- [ ] Add 2 PNG logo files (root)
- [ ] Add 1 PNG logo file (images folder)
- [ ] Add 39 WebP images
  - [ ] 27 event images
  - [ ] 3 timeline images
  - [ ] 2 team photos
  - [ ] 4 slider images
  - [ ] 3 incubation hub images
- [ ] Test all images load correctly
- [ ] Run `npm run build` to verify

---

## 🎨 Image Specifications

### Event Images (WebP)
- **Recommended Size:** 800x600px
- **Max File Size:** 100KB per image
- **Quality:** 85%

### Logo Images (PNG)
- **Recommended Size:** 512x512px
- **Transparent Background:** Yes
- **Max File Size:** 50KB

### Team Photos (WebP)
- **Recommended Size:** 200x200px
- **Format:** Square/Circle crop
- **Max File Size:** 20KB

### Timeline Images (WebP)
- **Recommended Size:** 400x400px
- **Format:** Square
- **Max File Size:** 50KB

---

## 📝 Notes

1. **All event images** are now referenced as `.webp` in the code
2. **Logos remain PNG** for maximum compatibility with all browsers and platforms
3. **SVG placeholders** are used as fallbacks
4. **Team photos** converted to WebP for faster loading
5. **Image slider** uses WebP format

---

## 🚀 Next Steps

1. **Gather all your images** (51 total)
2. **Convert PNG/JPG to WebP** using online tools or the conversion script
3. **Place images in correct folders** as shown above
4. **Test the website** to ensure all images load
5. **Run production build** to verify everything works

---

**Last Updated:** October 28, 2025  
**Total Images Required:** 51  
**WebP Format:** 39 images (76%)  
**PNG Format:** 2 images (4%)  
**Already Exists:** 1 SVG (2%)
