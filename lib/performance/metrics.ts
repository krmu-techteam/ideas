// Performance monitoring utilities

export interface PerformanceMetrics {
  fcp?: number // First Contentful Paint
  lcp?: number // Largest Contentful Paint
  fid?: number // First Input Delay
  cls?: number // Cumulative Layout Shift
  ttfb?: number // Time to First Byte
  tti?: number // Time to Interactive
}

export function reportWebVitals(metric: any) {
  // Send to analytics service
  if (typeof window !== "undefined") {
    console.log("[Performance]", metric.name, metric.value)

    // Example: Send to Google Analytics
    if (window.gtag) {
      window.gtag("event", metric.name, {
        value: Math.round(metric.value),
        event_category: "Web Vitals",
        event_label: metric.id,
        non_interaction: true,
      })
    }
  }
}

export function measureComponentRender(componentName: string) {
  const startTime = performance.now()

  return () => {
    const endTime = performance.now()
    const duration = endTime - startTime
    console.log(`[Performance] ${componentName} rendered in ${duration.toFixed(2)}ms`)
  }
}

export function getPerformanceMetrics(): PerformanceMetrics {
  if (typeof window === "undefined") return {}

  const navigation = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming
  const paint = performance.getEntriesByType("paint")

  return {
    ttfb: navigation?.responseStart - navigation?.fetchStart,
    fcp: paint.find((p) => p.name === "first-contentful-paint")?.startTime,
  }
}
