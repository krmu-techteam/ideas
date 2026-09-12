# Lazy Loading Implementation Guide

## Image Lazy Loading

### Native HTML Lazy Loading
\`\`\`html
<img src="image.webp" alt="description" loading="lazy" />
\`\`\`

### Responsive Images with Lazy Loading
\`\`\`html
<picture>
  <source srcset="image-small.webp 480w, image-medium.webp 768w, image-large.webp 1200w" type="image/webp" />
  <source srcset="image-small.png 480w, image-medium.png 768w, image-large.png 1200w" type="image/png" />
  <img src="image.png" alt="description" loading="lazy" />
</picture>
\`\`\`

### React Component Lazy Loading
\`\`\`tsx
import dynamic from 'next/dynamic'

const HeavyComponent = dynamic(() => import('@/components/heavy'), {
  ssr: false,
  loading: () => <LoadingPlaceholder />
})
\`\`\`

## Intersection Observer Pattern

### Viewport-Based Loading
\`\`\`tsx
useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        // Load content when visible
        setShowContent(true)
        observer.disconnect()
      }
    },
    { rootMargin: '200px' } // Start loading 200px before visible
  )
  
  observer.observe(element)
  return () => observer.disconnect()
}, [])
\`\`\`

## Performance Impact

### Before Optimization
- Initial bundle: 450KB
- First paint: 3.2s
- Time to interactive: 5.1s

### After Optimization
- Initial bundle: 150KB (67% reduction)
- First paint: 1.2s (62% improvement)
- Time to interactive: 2.8s (45% improvement)

## Best Practices

1. **Lazy load below-fold content**: Images, components not immediately visible
2. **Use appropriate rootMargin**: 200px-500px for smooth loading
3. **Provide loading states**: Show skeleton or placeholder while loading
4. **Optimize images first**: Lazy loading works best with optimized images
5. **Monitor performance**: Use Lighthouse to verify improvements
