import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Arena — IDEAS 4.0 | K.R. Mangalam University",
  description:
    "Explore AI Arena at IDEAS 4.0 — robotics, immersive AI experiences, Robo Olympics, Ideathon, panel discussions, keynote sessions and startup pitches at K.R. Mangalam University, 27–28 October 2026.",
  openGraph: {
    title: "AI Arena — IDEAS 4.0 | K.R. Mangalam University",
    description:
      "Explore AI Arena at IDEAS 4.0 — robotics, immersive AI experiences, Robo Olympics, Ideathon, panel discussions, keynote sessions and startup pitches at K.R. Mangalam University, 27–28 October 2026.",
    url: "https://ideas.krmangalam.edu.in/ai-arena",
  },
};

export default function AiArenaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
