import { setRequestLocale } from 'next-intl/server';
import { HeroSection } from '@/components/sections/HeroSection';
import { ImpactSection } from '@/components/sections/ImpactSection';
import { ExploreSection } from '@/components/sections/ExploreSection';
import { NewsSection } from '@/components/sections/NewsSection';
import { FundingSection } from '@/components/sections/FundingSection';
import { NewsletterSignup } from '@/components/sections/NewsletterSignup';
import { getNewsArticles, getFundingOpportunities } from '@/lib/content';

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  // Fetch CMS data for homepage sections
  const [{ articles: newsArticles }, fundingOpportunities] = await Promise.all([
    getNewsArticles(locale as 'en' | 'cy', 1, 6), // Get more to find featured article
    getFundingOpportunities(locale as 'en' | 'cy'),
  ]);
  
  // Sort articles: featured first, then by date
  const sortedArticles = [...newsArticles].sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
  
  // Only show open funding opportunities
  const openFunding = fundingOpportunities.filter(opp => opp.status === 'Open' || !opp.status);

  return (
    <>
      {/* Hero Section - Mission focused */}
      <HeroSection />
      
      {/* Our Work / Impact - What we do and who we help */}
      <ImpactSection />
      
      {/* Explore Sport Wales - All key areas accessible */}
      <ExploreSection />
      
      {/* Latest News & Stories - Showcasing people and impact */}
      <NewsSection articles={sortedArticles} />
      
      {/* Support & Funding - One of the ways we help (not the main focus) */}
      <FundingSection opportunities={openFunding} />
      
      {/* Newsletter Signup */}
      <section className="py-12 md:py-20">
        <div className="container">
          <NewsletterSignup />
        </div>
      </section>
    </>
  );
}
