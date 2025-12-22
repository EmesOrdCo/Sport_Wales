import { setRequestLocale } from 'next-intl/server';
import { HeroSection } from '@/components/sections/HeroSection';
import { ImpactSection } from '@/components/sections/ImpactSection';
import { ExploreSection } from '@/components/sections/ExploreSection';
import { NewsSection } from '@/components/sections/NewsSection';
import { FundingSection } from '@/components/sections/FundingSection';
import { NewsletterSignup } from '@/components/sections/NewsletterSignup';

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      {/* Hero Section - Mission focused */}
      <HeroSection />
      
      {/* Our Work / Impact - What we do and who we help */}
      <ImpactSection />
      
      {/* Explore Sport Wales - All key areas accessible */}
      <ExploreSection />
      
      {/* Latest News & Stories - Showcasing people and impact */}
      <NewsSection />
      
      {/* Support & Funding - One of the ways we help (not the main focus) */}
      <FundingSection />
      
      {/* Newsletter Signup */}
      <section className="py-12 md:py-20">
        <div className="container">
          <NewsletterSignup />
        </div>
      </section>
    </>
  );
}
