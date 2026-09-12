import { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Events | IDEAS 4.0 | K.R. Mangalam University",
  description:
    "Browse all events at IDEAS 4.0 on October 27–28, 2026. Discover 35 competitions across innovation, technology, arts, business, and research at K.R. Mangalam University with a ₹10 lakh prize pool.",
  keywords: [
    "all events",
    "IDEAS 4.0 events",
    "KRMU competitions",
    "innovation events",
    "student competitions",
    "tech events",
    "business competitions",
    "K.R. Mangalam University",
  ],
  openGraph: {
    title: "All Events | IDEAS 4.0",
    description:
      "35 exciting competitions and events across innovation, technology, arts, and business on October 27–28, 2026",
    url: "https://ideas.krmangalam.edu.in/all-events",
    siteName: "IDEAS 4.0",
    type: "website",
  },
  alternates: {
    canonical: "https://ideas.krmangalam.edu.in/all-events",
  },
};

export default function AllEventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
