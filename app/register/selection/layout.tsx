import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register Now | IDEAS 4.0 | K.R. Mangalam University",
  description:
    "Register for IDEAS 4.0 happening on October 27–28, 2026 at K.R. Mangalam University. Choose from 28 competitions across 10 categories, spotlight activities, and cultural events. ₹10 lakh prize pool. School and university students welcome.",
  keywords: [
    "register IDEAS 4.0",
    "KRMU registration",
    "event registration",
    "student registration",
    "competition registration",
    "IDEAS 4.0 sign up",
    "K.R. Mangalam University",
  ],
  openGraph: {
    title: "Register Now | IDEAS 4.0",
    description:
      "Register for IDEAS 4.0 - 28 competitions across 10 categories, ₹10 lakh prize pool, October 27–28, 2026",
    url: "https://ideas.krmangalam.edu.in/register/selection",
    siteName: "IDEAS 4.0",
    type: "website",
  },
  alternates: {
    canonical: "https://ideas.krmangalam.edu.in/register/selection",
  },
};

export default function RegisterSelectionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
