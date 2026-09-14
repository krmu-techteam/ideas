import EventDetailView from "@/components/event-detail-view";
import { getEventBySlug, getAllEvents } from "@/lib/data/events";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const event = getEventBySlug(slug);
  if (!event) return { title: "Event Not Found | IDEAS 4.0" };
  return {
    title: `${event.title} | IDEAS 4.0`,
    description: event.description.slice(0, 160),
  };
}

export async function generateStaticParams() {
  const events = getAllEvents();
  return events.map((e) => ({ slug: e.slug }));
}

export default async function EventDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const event = getEventBySlug(slug);

  return (
    <EventDetailView
      event={event}
      backUrl="/all-events"
      backLabel="Back to All Events"
    />
  );
}
