import { AllEventsClientPage } from "./all-events-client"
import type { Metadata } from "next"
import { generateBaseMetadata } from "@/lib/seo/metadata"

export const metadata: Metadata = generateBaseMetadata(
  "All Events | IDEAS 4.0",
  "Explore the official events at IDEAS 4.0 including innovation competitions, academic challenges, and cultural performances. October 27-28, 2026.",
  "/all-events",
)

export default function AllEventsPage() {
  return <AllEventsClientPage />
}
