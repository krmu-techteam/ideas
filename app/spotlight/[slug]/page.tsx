import EventDetailView from "@/components/event-detail-view";
import { getEventBySlug, getSpotlightEvents } from "@/lib/data/events";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const event = getEventBySlug(slug);
  if (!event) return { title: "Activity Not Found | IDEAS 4.0" };
  return {
    title: `${event.title} | Spotlight Activities | IDEAS 4.0`,
    description: event.description.slice(0, 160),
  };
}

export async function generateStaticParams() {
  const events = getSpotlightEvents();
  return events.map((e) => ({ slug: e.slug }));
}

export default async function SpotlightDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const event = getEventBySlug(slug);

  return (
    <EventDetailView
      event={event}
      backUrl="/spotlight"
      backLabel="Back to Spotlight Activities"
    />
  );
}
