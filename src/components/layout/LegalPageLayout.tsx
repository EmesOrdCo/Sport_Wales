'use client';

import { Link } from '@/i18n/navigation';

interface BreadcrumbItem {
  name: string;
  href?: string;
}

interface LegalPageLayoutProps {
  title: string;
  lastUpdated?: string;
  breadcrumbs: BreadcrumbItem[];
  children: React.ReactNode;
  isWelsh?: boolean;
}

export default function LegalPageLayout({
  title,
  lastUpdated,
  breadcrumbs,
  children,
  isWelsh = false,
}: LegalPageLayoutProps) {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[var(--sw-slate)] to-[var(--sw-slate-800)] py-16 md:py-20 text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="container relative z-10">
          {/* Breadcrumb */}
          <nav className="mb-6" aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-white/70">
              {breadcrumbs.map((item, index) => (
                <li key={index} className="flex items-center">
                  {index > 0 && (
                    <svg
                      className="w-4 h-4 mx-2 text-white/40"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                  {item.href ? (
                    <Link
                      href={item.href as any}
                      className="hover:text-white transition-colors"
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <span className="text-white">{item.name}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4 animate-slide-down !text-white">
            {title}
          </h1>
          {lastUpdated && (
            <p className="text-white/70 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              {isWelsh ? 'Diweddarwyd ddiwethaf: ' : 'Last updated: '}
              {lastUpdated}
            </p>
          )}
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:text-[var(--sw-slate)] prose-p:text-[var(--sw-gray-700)] prose-li:text-[var(--sw-gray-700)] prose-a:text-[var(--sw-teal)] prose-a:no-underline hover:prose-a:underline prose-strong:text-[var(--sw-slate)]">
              {children}
            </article>
          </div>
        </div>
      </section>

      {/* Back to Top */}
      <section className="py-8 bg-[var(--sw-gray-50)] border-t border-[var(--sw-gray-200)]">
        <div className="container">
          <div className="flex justify-between items-center">
            <Link
              href="/"
              className="inline-flex items-center text-[var(--sw-teal)] hover:underline group"
            >
              <svg
                className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              {isWelsh ? 'Nôl i\'r Hafan' : 'Back to Home'}
            </Link>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-flex items-center text-[var(--sw-gray-600)] hover:text-[var(--sw-slate)] transition-colors"
            >
              {isWelsh ? 'Nôl i\'r brig' : 'Back to top'}
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}


