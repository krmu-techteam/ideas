# IDEAS 3.0 Routing Structure & SEO Guide

## Current Route Organization

### Main Pages
- `/` - Homepage (Hero, Stats, Events Overview)
- `/all-events` - Complete event listing with filters
- `/showcase` - Event showcase/gallery
- `/spotlight` - Spotlight events
- `/contact` - Contact & registration information

### IDEAS Tracks (Thematic Categories)
- `/ideas/innovation` - Innovation Track
- `/ideas/distinctiveness` - Distinctiveness Track
- `/ideas/extension` - Extension Track
- `/ideas/achievements` - Achievements Track
- `/ideas/skill-based` - Skill-Based Learning Track

### Event Details
- `/events/[slug]` - Individual event details page (future implementation)

### Registration & Admin
- `/register` - Registration portal
- `/register/selection` - Event selection
- `/register/university` - University registration
- `/register/payment` - Payment processing

### Utility Pages
- `/cultural` - Cultural events
- `/not-found` - 404 page

## Route Naming Conventions

### Best Practices Applied
1. **Lowercase & Kebab-case**: All routes use lowercase with hyphens (e.g., `/all-events`, `/skill-based`)
2. **Descriptive Names**: Routes clearly indicate their purpose
3. **Hierarchical Structure**: Related routes grouped under parent paths
4. **SEO-Friendly**: Route names include keywords for better search visibility

### Recommended Improvements
- Consider renaming `/showcase` to `/event-showcase` for clarity
- Consider renaming `/spotlight` to `/featured-events` for better UX
- Add `/events/[slug]` for individual event detail pages
- Add `/faq` as a dedicated page route

## SEO Metadata Strategy

### Page-Level Metadata
Each page includes:
- Unique, descriptive title tags
- Comprehensive meta descriptions (150-160 characters)
- Open Graph tags for social sharing
- Twitter Card tags
- Canonical URLs
- Structured data (JSON-LD)

### Breadcrumb Navigation
Implemented on:
- `/all-events`
- Individual event pages (when created)
- Track pages

### Sitemap
- Dynamic sitemap generation at `/sitemap.xml`
- Includes all static and dynamic routes
- Updated with proper change frequency and priority

## Performance Optimization

### Route-Level Optimizations
1. **Lazy Loading**: Components below the fold use dynamic imports
2. **Image Optimization**: WebP format with fallbacks
3. **Code Splitting**: Each route has its own bundle
4. **Caching**: Static pages cached for 1 year

### Mobile Responsiveness
- All routes fully responsive
- Touch-friendly navigation
- Optimized for mobile viewports

## Future Enhancements

1. **Dynamic Event Routes**: `/events/[slug]` for individual event pages
2. **Search Functionality**: `/search?q=query` for event search
3. **Admin Dashboard**: `/admin/*` for event management
4. **User Profiles**: `/profile/[userId]` for user accounts
5. **Event Calendar**: `/calendar` for visual event scheduling
