"use client"

import { useState, useEffect } from "react"

interface PictureImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
  sizes?: string
  loading?: "lazy" | "eager"
}

/**
 * PictureImage Component
 * Uses native <picture> element for WebP with fallback
 * Best for static export and cPanel hosting
 */
export default function PictureImage({
  src,
  alt,
  width,
  height,
  className = "",
  priority = false,
  sizes,
  loading = "lazy",
}: PictureImageProps) {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return <div className={`bg-gray-200 animate-pulse ${className}`} style={{ width, height }} />
  }

  // Convert to WebP path
  const webpSrc = src.replace(/\.(jpg|jpeg|png)$/i, ".webp")
  const isPng = src.endsWith(".png")
  const isJpg = src.endsWith(".jpg") || src.endsWith(".jpeg")

  // If already WebP or external, just use img tag
  if (!isJpg && !isPng) {
    return (
      <img
        src={src || "/placeholder.svg"}
        alt={alt}
        width={width}
        height={height}
        className={className}
        loading={priority ? "eager" : loading}
        decoding="async"
      />
    )
  }

  return (
    <picture>
      {/* WebP format for modern browsers */}
      <source srcSet={webpSrc} type="image/webp" />
      {/* Fallback to original format */}
      <img
        src={src || "/placeholder.svg"}
        alt={alt}
        width={width}
        height={height}
        className={className}
        loading={priority ? "eager" : loading}
        decoding="async"
      />
    </picture>
  )
}
