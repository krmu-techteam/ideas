import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | IDEAS 4.0 | K.R. Mangalam University',
  description: 'Get in touch with IDEAS 4.0 team. Contact K.R. Mangalam University for event information, registration queries, and partnership opportunities. Located in Gurugram, Haryana.',
  keywords: [
    'contact IDEAS 4.0',
    'KRMU contact',
    'event queries',
    'registration help',
    'K.R. Mangalam University contact',
    'Gurugram',
  ],
  openGraph: {
    title: 'Contact Us | IDEAS 4.0',
    description: 'Contact IDEAS 4.0 team at K.R. Mangalam University for event information and registration support',
    url: 'https://ideas.krmangalam.edu.in/contact',
    siteName: 'IDEAS 4.0',
    type: 'website',
  },
  alternates: {
    canonical: 'https://ideas.krmangalam.edu.in/contact',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
