export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "K.R. Mangalam University",
    url: "https://www.krmangalam.edu.in",
    logo: "https://ideas.krmangalam.edu.in/university-logo.png",
    sameAs: [
      "https://www.facebook.com/krmangalam",
      "https://www.instagram.com/krmangalam",
      "https://twitter.com/krmangalam",
    ],
  }
}

export function generateEventSchema(
  eventTitle: string,
  eventDescription: string,
  startDate: string,
  endDate: string,
  venue: string,
  image: string,
) {
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    name: eventTitle,
    description: eventDescription,
    image: image,
    startDate: startDate,
    endDate: endDate,
    eventAttendanceMode: "OfflineEventAttendanceMode",
    eventStatus: "EventScheduled",
    location: {
      "@type": "Place",
      name: venue,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Gurugram",
        addressRegion: "Haryana",
        postalCode: "122001",
        addressCountry: "IN",
      },
    },
    organizer: {
      "@type": "Organization",
      name: "K.R. Mangalam University",
      url: "https://www.krmangalam.edu.in",
    },
  }
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}
