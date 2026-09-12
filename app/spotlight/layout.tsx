import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Spotlight Activities | IDEAS 4.0 | K.R. Mangalam University',
  description: 'Explore exciting spotlight activities at IDEAS 4.0 on October 27–28, 2026. Featuring innovation challenges, robotics competitions, tech showcases, and hands-on workshops at K.R. Mangalam University.',
  keywords: [
    'spotlight activities',
    'IDEAS 4.0',
    'KRMU events',
    'innovation competitions',
    'robotics',
    'tech competitions',
    'student events',
    'K.R. Mangalam University',
  ],
  openGraph: {
    title: 'Spotlight Activities | IDEAS 4.0',
    description: 'Join exciting spotlight activities featuring innovation, robotics, and tech competitions on October 27–28, 2026',
    url: 'https://ideas.krmangalam.edu.in/spotlight',
    siteName: 'IDEAS 4.0',
    type: 'website',
  },
  alternates: {
    canonical: 'https://ideas.krmangalam.edu.in/spotlight',
  },
}

export default function SpotlightLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
