import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 bg-slate-50/50">
      <div className="max-w-xl mx-auto text-center">
        {/* Status Pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-slate-100 text-slate-700 border border-slate-200/80 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
          Error 404
        </div>

        {/* 404 Headline */}
        <h1 className="text-7xl sm:text-8xl font-extrabold tracking-tight text-slate-900 font-outfit">
          404
        </h1>
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-2 font-outfit">
          Page Not Found
        </h2>

        {/* Professional, concise explanation */}
        <p className="mt-3 text-base text-slate-600 max-w-md mx-auto leading-relaxed">
          The page you are looking for could not be found. It may have been
          moved, renamed, or is temporarily unavailable.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 transition-colors shadow-sm"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            Back to Home
          </Link>
          <Link
            href="/all-events"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 transition-colors shadow-sm"
          >
            Explore Competitions
          </Link>
        </div>

        {/* Useful Links Footer */}
        <div className="mt-12 pt-8 border-t border-slate-200/80">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
            Quick Navigation
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-slate-600">
            <Link
              href="/all-events"
              className="hover:text-slate-900 transition-colors"
            >
              All Events
            </Link>
            <span className="text-slate-300">•</span>
            <Link
              href="/spotlight"
              className="hover:text-slate-900 transition-colors"
            >
              Spotlight
            </Link>
            <span className="text-slate-300">•</span>
            <Link
              href="/cultural"
              className="hover:text-slate-900 transition-colors"
            >
              Cultural
            </Link>
            <span className="text-slate-300">•</span>
            <Link
              href="/contact"
              className="hover:text-slate-900 transition-colors"
            >
              Contact
            </Link>
            <span className="text-slate-300">•</span>
            <Link
              href="/#faq"
              className="hover:text-slate-900 transition-colors"
            >
              FAQ
            </Link>
          </div>
          <p className="mt-6 text-xs text-slate-400">
            IDEAS 4.0 • K.R. Mangalam University
          </p>
        </div>
      </div>
    </section>
  );
}
