import type { Metadata } from "next"

export const siteConfig = {
  name: "IDEAS 4.0",
  description:
    "KRMU's flagship mega fest celebrating innovation, academics, hands-on pedagogy, and cultural vibrancy. 120 canopies, 28 competitions, ₹10 lakh prize pool, 18,000+ participants.",
  url: "https://ideas.krmangalam.edu.in",
  ogImage: "https://ideas.krmangalam.edu.in/IDEAS_LOGO2.png",
  links: {
    twitter: "https://twitter.com/krmangalam",
    instagram: "https://instagram.com/krmangalam",
  },
}

export function generateBaseMetadata(title: string, description: string, path = "/", ogImage?: string): Metadata {
  const fullTitle = title === "IDEAS 4.0" ? title : `${title} | IDEAS 4.0`
  const url = `${siteConfig.url}${path}`

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: "IDEAS 4.0",
      images: [
        {
          url: ogImage || siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage || siteConfig.ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  }
}

export function generateEventMetadata(
  eventTitle: string,
  eventDescription: string,
  eventDate: string,
  eventVenue: string,
  path: string,
): Metadata {
  const description = `${eventDescription} | Date: ${eventDate} | Venue: ${eventVenue}`
  return generateBaseMetadata(eventTitle, description, path)
}
