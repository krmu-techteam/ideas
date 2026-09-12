import { generateOrganizationSchema, generateEventSchema, generateBreadcrumbSchema } from "@/lib/seo/structured-data"

interface StructuredDataProps {
  type: "organization" | "event" | "breadcrumb"
  data?: any
}

export function StructuredData({ type, data }: StructuredDataProps) {
  let schema = {}

  switch (type) {
    case "organization":
      schema = generateOrganizationSchema()
      break
    case "event":
      schema = generateEventSchema(data.title, data.description, data.startDate, data.endDate, data.venue, data.image)
      break
    case "breadcrumb":
      schema = generateBreadcrumbSchema(data.items)
      break
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}
