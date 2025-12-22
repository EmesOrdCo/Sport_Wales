import { Link } from '@/i18n/navigation';

export default function NotFound() {
  return (
    <main className="min-h-[70vh] flex items-center justify-center py-20">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          {/* 404 Number */}
          <div className="relative mb-8">
            <span className="text-[12rem] md:text-[16rem] font-bold font-display text-[var(--sw-gray-100)] leading-none select-none">
              404
            </span>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-[var(--sw-crimson)] to-[var(--sw-crimson-dark)] flex items-center justify-center animate-pulse-glow">
                <svg
                  className="w-12 h-12 md:w-16 md:h-16 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Content */}
          <h1 className="text-3xl md:text-4xl font-heading font-bold text-[var(--sw-slate)] mb-4">
            Page Not Found
          </h1>
          <p className="text-lg text-[var(--sw-gray-600)] mb-8 max-w-md mx-auto">
            Sorry, we couldn&apos;t find the page you&apos;re looking for. It may have been moved or
            no longer exists.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="btn btn-primary">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              Go to Homepage
            </Link>
            <Link href="/contact" className="btn btn-outline">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Contact Us
            </Link>
          </div>

          {/* Helpful Links */}
          <div className="mt-12 pt-8 border-t border-[var(--sw-gray-200)]">
            <p className="text-sm text-[var(--sw-gray-500)] mb-4">
              You might find these helpful:
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/funding"
                className="text-sm text-[var(--sw-teal)] hover:underline"
              >
                Funding & Support
              </Link>
              <Link
                href="/news"
                className="text-sm text-[var(--sw-teal)] hover:underline"
              >
                Latest News
              </Link>
              <Link
                href="/about"
                className="text-sm text-[var(--sw-teal)] hover:underline"
              >
                About Sport Wales
              </Link>
              <Link
                href="/search"
                className="text-sm text-[var(--sw-teal)] hover:underline"
              >
                Search
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

