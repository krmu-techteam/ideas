import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cultural Events | IDEAS 4.0 | K.R. Mangalam University",
  description:
    "Experience vibrant cultural events at IDEAS 4.0 on October 27–28, 2026. Dance, music, fashion, and performances celebrating creativity and cultural expression at K.R. Mangalam University.",
  keywords: [
    "cultural events",
    "IDEAS 4.0",
    "KRMU cultural fest",
    "dance competition",
    "music events",
    "cultural performances",
    "student festival",
    "K.R. Mangalam University",
  ],
  openGraph: {
    title: "Cultural Events | IDEAS 4.0",
    description:
      "Dance, music, and cultural performances at IDEAS 4.0 on October 27–28, 2026",
    url: "https://ideas.krmangalam.edu.in/cultural",
    siteName: "IDEAS 4.0",
    type: "website",
  },
  alternates: {
    canonical: "https://ideas.krmangalam.edu.in/cultural",
  },
};

export default function CulturalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
