import HeroSection from "@/components/hero-section";
import CountdownTimer from "@/components/countdown-timer";
import StatsCounter from "@/components/stats-counter";

// Register and explore are now loaded eagerly before other sections
import dynamic from "next/dynamic";

// Eager load: Register CTA and Explore Events (critical for user engagement)
const RegisterCTA = dynamic(() => import("@/components/register-cta"), {
  ssr: true,
});
const ExploreEvents = dynamic(() => import("@/components/explore-events"), {
  ssr: true,
});

// Lazy load: Below-the-fold sections
const LazyIdeasGlance = dynamic(() => import("@/components/ideas-glance"), {
  loading: () => <div className="py-16" />,
});
const LazyEventTimeline = dynamic(() => import("@/components/event-timeline"), {
  loading: () => <div className="py-16" />,
});
const LazyAboutKrmu = dynamic(() => import("@/components/about-krmu"), {
  loading: () => <div className="py-16" />,
});
const LazyZonesHighlights = dynamic(
  () => import("@/components/zones-highlights"),
  {
    loading: () => <div className="py-16" />,
  },
);
const LazyUpcomingEvents = dynamic(
  () => import("@/components/upcoming-events"),
  {
    loading: () => <div className="py-16" />,
  },
);
const LazyIncubationHub = dynamic(() => import("@/components/incubation-hub"), {
  loading: () => <div className="py-16" />,
});
const LazyFaq = dynamic(() => import("@/components/faq"), {
  loading: () => <div className="py-16" />,
});
const LazyContactSection = dynamic(
  () => import("@/components/contact-section"),
  {
    loading: () => <div className="py-16" />,
  },
);

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden bg-[#F4F9FD]">
      {/* Critical sections - loaded first */}
      <div style={{ contain: "content", contentVisibility: "auto" }}>
        <HeroSection />
        <CountdownTimer />
        <StatsCounter />
      </div>

      <div style={{ contentVisibility: "auto", containIntrinsicSize: "600px" }}>
        <RegisterCTA />
      </div>

      <div style={{ contentVisibility: "auto", containIntrinsicSize: "800px" }}>
        <ExploreEvents />
      </div>

      {/* Below-the-fold sections */}
      <div style={{ contentVisibility: "auto", containIntrinsicSize: "800px" }}>
        <LazyIdeasGlance />
      </div>

      <div style={{ contentVisibility: "auto", containIntrinsicSize: "900px" }}>
        <LazyEventTimeline />
      </div>

      <div style={{ contentVisibility: "auto", containIntrinsicSize: "700px" }}>
        <LazyAboutKrmu />
      </div>

      <div style={{ contentVisibility: "auto", containIntrinsicSize: "900px" }}>
        <LazyZonesHighlights />
      </div>

      <div style={{ contentVisibility: "auto", containIntrinsicSize: "900px" }}>
        <LazyUpcomingEvents />
      </div>

      <div style={{ contentVisibility: "auto", containIntrinsicSize: "800px" }}>
        <LazyIncubationHub />
      </div>

      <div
        id="faq"
        style={{ contentVisibility: "auto", containIntrinsicSize: "700px" }}
      >
        <LazyFaq />
      </div>

      <div style={{ contentVisibility: "auto", containIntrinsicSize: "650px" }}>
        <LazyContactSection />
      </div>
    </div>
  );
}
