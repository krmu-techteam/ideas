// This is the single source of truth for all event data across the application

import type { EventItem } from "./events"

// Event categories for filtering
export const EVENT_CATEGORIES = {
  SPOTLIGHT: "spotlight",
  CULTURAL: "cultural",
  EXPLORE: "explore",
} as const

export type EventCategory = (typeof EVENT_CATEGORIES)[keyof typeof EVENT_CATEGORIES]

// Extended event interface with category type
export interface UnifiedEventItem extends EventItem {
  eventCategory: EventCategory
}

// Get all events by category
export function getEventsByCategory(category: EventCategory): UnifiedEventItem[] {
  const allEvents = getAllUnifiedEvents()
  return allEvents.filter((event) => event.eventCategory === category)
}

// Get all unified events
export function getAllUnifiedEvents(): UnifiedEventItem[] {
  // Import from existing events.ts and tag them appropriately
  const { getSpotlightEvents, getCulturalEvents } = require("./events")

  const spotlightEvents = getSpotlightEvents().map((e: EventItem) => ({
    ...e,
    eventCategory: EVENT_CATEGORIES.SPOTLIGHT,
  }))

  const culturalEvents = getCulturalEvents().map((e: EventItem) => ({
    ...e,
    eventCategory: EVENT_CATEGORIES.CULTURAL,
  }))

  return [...spotlightEvents, ...culturalEvents]
}

// Search across all events
export function searchAllEvents(term: string, category?: EventCategory): UnifiedEventItem[] {
  const t = term.trim().toLowerCase()
  let events = getAllUnifiedEvents()

  if (category) {
    events = events.filter((e) => e.eventCategory === category)
  }

  if (!t) return events

  return events.filter(
    (ev) =>
      ev.title.toLowerCase().includes(t) ||
      ev.description.toLowerCase().includes(t) ||
      ev.department?.toLowerCase().includes(t) ||
      ev.sessions.some((s) => s.participation?.toLowerCase().includes(t) || s.venue?.toLowerCase().includes(t)),
  )
}

// Get event statistics
export function getEventStats() {
  const all = getAllUnifiedEvents()
  return {
    total: all.length,
    spotlight: all.filter((e) => e.eventCategory === EVENT_CATEGORIES.SPOTLIGHT).length,
    cultural: all.filter((e) => e.eventCategory === EVENT_CATEGORIES.CULTURAL).length,
  }
}
