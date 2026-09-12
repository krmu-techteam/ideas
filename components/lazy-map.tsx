"use client"
import { useEffect, useRef, useState } from 'react'

interface LazyMapProps {
  src: string
  title: string
  className?: string
  height?: number | string
}

export default function LazyMap({ src, title, className, height = '100%' }: LazyMapProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!ref.current) return
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      })
    }, { rootMargin: '200px' })
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className={className} style={{ minHeight: typeof height === 'number' ? `${height}px` : height }}>
      {visible ? (
        <iframe
          src={src}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={title}
        />
      ) : (
        <div className="w-full h-full bg-gray-200 animate-pulse rounded" />
      )}
    </div>
  )
}
