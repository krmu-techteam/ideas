"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

interface OptimizedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  fill?: boolean
  className?: string
  priority?: boolean
  sizes?: string
  quality?: number
  objectFit?: "cover" | "contain" | "fill" | "scale-down"
  objectPosition?: string
  onLoad?: () => void
}

/**
 * OptimizedImage Component
 * Automatically serves WebP images with PNG/JPG fallback
 * Handles lazy loading, responsive sizing, and performance optimization
 */
export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  fill = false,
  className = "",
  priority = false,
  sizes,
  quality = 75,
  objectFit = "cover",
  objectPosition = "center",
  onLoad,
}: OptimizedImageProps) {
  const [imageSrc, setImageSrc] = useState<string>("")
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    // Convert image path to WebP if it's a JPG or PNG
    const convertToWebP = (path: string): string => {
      if (!path) return path

      // If already WebP, return as-is
      if (path.endsWith(".webp")) return path

      // If it's a placeholder or external URL, return as-is
      if (path.startsWith("http") || path.includes("placeholder")) return path

      // Convert JPG/PNG to WebP
      if (path.endsWith(".jpg") || path.endsWith(".jpeg") || path.endsWith(".png")) {
        return path.replace(/\.(jpg|jpeg|png)$/i, ".webp")
      }

      return path
    }

    setImageSrc(convertToWebP(src))
  }, [src])

  const handleError = () => {
    // Fallback to original format if WebP fails
    if (imageSrc !== src && !hasError) {
      setImageSrc(src)
      setHasError(true)
    }
  }

  const handleLoad = () => {
    setIsLoaded(true)
    onLoad?.()
  }

  if (!imageSrc) {
    return (
      <div
        className={`bg-gray-200 animate-pulse ${className}`}
        style={{
          width: fill ? "100%" : width,
          height: fill ? "100%" : height,
        }}
      />
    )
  }

  const imageProps = {
    alt,
    className: `${className} transition-opacity duration-300 ${isLoaded ? "opacity-100" : "opacity-0"}`,
    priority,
    quality,
    onError: handleError,
    onLoad: handleLoad,
    sizes,
  }

  if (fill) {
    return (
      <Image
        {...imageProps}
        src={imageSrc || "/placeholder.svg"}
        fill
        style={{
          objectFit,
          objectPosition,
        }}
      />
    )
  }

  return (
    <Image
      {...imageProps}
      src={imageSrc || "/placeholder.svg"}
      width={width}
      height={height}
      style={{
        objectFit,
        objectPosition,
      }}
    />
  )
}
