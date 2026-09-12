"use client"

import { useEffect } from "react"
import { reportWebVitals } from "@/lib/performance/metrics"

export function PerformanceMonitor() {
  useEffect(() => {
    // Import web-vitals dynamically
    import("web-vitals").then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(reportWebVitals)
      getFID(reportWebVitals)
      getFCP(reportWebVitals)
      getLCP(reportWebVitals)
      getTTFB(reportWebVitals)
    })
  }, [])

  return null
}
