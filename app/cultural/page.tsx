"use client";

import { useState, useEffect } from "react";
import { getCulturalEvents } from "@/lib/data/events";
import UnifiedEventGrid from "@/components/unified-event-grid";
import {
  type UnifiedEventItem,
  EVENT_CATEGORIES,
} from "@/lib/data/unified-events";

export default function CulturalPage() {
  const [events, setEvents] = useState<UnifiedEventItem[]>([]);
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    const culturalEvents = getCulturalEvents();
    const taggedEvents = culturalEvents.map((e) => ({
      ...e,
      eventCategory: EVENT_CATEGORIES.CULTURAL,
    })) as UnifiedEventItem[];
    setEvents(taggedEvents);

    // Extract unique categories
    const cats = new Set<string>();
    culturalEvents.forEach((event) => {
      if (event.category) cats.add(event.category);
    });
    setCategories(Array.from(cats).sort());
  }, []);

  return (
    <div className="min-h-screen pt-24 pb-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <UnifiedEventGrid
          events={events}
          showSearch={true}
          showFilter={true}
          filterOptions={categories}
          title="Cultural Events"
          description="Dance, music, and fashion converging in dynamic performances that celebrate expression, collaboration, and creativity at IDEAS 4.0. Join us on October 27–28, 2026!"
          emptyMessage="No cultural events found matching your criteria."
        />
      </div>
    </div>
  );
}
