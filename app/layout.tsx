import type React from "react";
import type { Metadata } from "next";
import { Poppins, Plus_Jakarta_Sans, Outfit } from "next/font/google";
import Image from "next/image";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ScrollToTop from "@/components/scroll-to-top";
import { Toaster } from "@/components/ui/toaster";
import { GoogleTagManager } from "@next/third-parties/google";
import { ThemeProvider } from "@/components/theme-provider";
import { StructuredData } from "@/components/structured-data";
import { generateBaseMetadata } from "@/lib/seo/metadata";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-outfit",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  ...generateBaseMetadata(
    "IDEAS 4.0 | K.R. Mangalam University",
    "IDEAS 4.0 is KRMU's flagship mega fest that celebrates innovation, academics, hands-on pedagogy, and cultural vibrancy. The fest brings together over 18,000 participants from NCR schools, pan-India universities, and startups. With 120 canopies, 35 competitions, and a ₹10 lakh prize pool spread across October 27–28, 2026. Register now for spotlight activities, cultural events, and innovation competitions.",
    "/",
  ),
  keywords: [
    "IDEAS 4.0",
    "K.R. Mangalam University",
    "KRMU",
    "Innovation Festival",
    "Student Competition",
    "Academic Event",
    "Cultural Festival",
    "Tech Competition",
    "KRMU Events",
    "Gurugram",
    "November 2025",
    "Register IDEAS 4.0",
    "Spotlight Activities",
    "Cultural Events KRMU",
    "Innovation Competition",
    "University Fest",
    "Delhi NCR Events",
  ],
  authors: [{ name: "K.R. Mangalam University" }],
  creator: "K.R. Mangalam University",
  publisher: "K.R. Mangalam University",
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: ["/favicon.ico"],
    apple: [{ url: "/icon.png", type: "image/png", sizes: "512x512" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <GoogleTagManager gtmId="GTM-WH5TVGMJ" />
      <head>
        <StructuredData type="organization" />
        <StructuredData
          type="event"
          data={{
            title: "IDEAS 4.0",
            description:
              "KRMU's flagship mega fest celebrating innovation, academics, hands-on pedagogy, and cultural vibrancy",
            startDate: "2026-10-27T09:30:00+05:30",
            endDate: "2026-10-28T18:00:00+05:30",
            venue: "K.R. Mangalam University, Gurugram, Haryana",
            image: "https://ideas.krmangalam.edu.in/4.0.jpeg",
          }}
        />

        {/* PERFORMANCE OPTIMIZATION: Preload the logo that appears on scroll to prevent layout shift or delay */}
        <link rel="preload" href="/IDEAS_LOGO2.png" as="image" />

        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://connect.facebook.net" />

        {/* Meta Pixel Code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '796879556662442');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <Image
            height={1}
            width={1}
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=796879556662442&ev=PageView&noscript=1"
            alt="facebook pixel"
          />
        </noscript>
        {/* End Meta Pixel Code */}
      </head>
      <body
        className={`${plusJakartaSans.variable} ${outfit.variable} ${poppins.variable} font-sans overflow-x-hidden antialiased`}
        style={{ WebkitFontSmoothing: "antialiased" }}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WH5TVGMJ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          forcedTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Header />
          <main>{children}</main>
          <Footer />
          <ScrollToTop />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
