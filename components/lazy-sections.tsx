"use client"
import dynamic from 'next/dynamic'
import UpcomingEventsSkeleton from '@/components/skeletons/upcoming-events-skeleton'

export const LazyIdeasGlance = dynamic(() => import('@/components/ideas-glance'), { loading: () => <div className="py-16" /> })
export const LazyEventTimeline = dynamic(() => import('@/components/event-timeline'), { loading: () => <div className="py-16" /> })
export const LazyAboutKrmu = dynamic(() => import('@/components/about-krmu'), { loading: () => <div className="py-16" /> })
export const LazyUpcomingEvents = dynamic(() => import('@/components/upcoming-events'), { loading: () => <UpcomingEventsSkeleton /> })
export const LazyCulturalEvents = dynamic(() => import('@/components/cultural-events'), { loading: () => <div className="py-16 bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50" /> })
export const LazyIncubationHub = dynamic(() => import('@/components/incubation-hub'), { loading: () => <div className="py-16" /> })
export const LazyFaq = dynamic(() => import('@/components/faq'), { loading: () => <div className="py-16" /> })
export const LazyContactSection = dynamic(() => import('@/components/contact-section'), { loading: () => <div className="py-16" /> })
