import { HomeHero } from '@/components/home/HomeHero';
import { HomePortfolioSection } from '@/components/home/HomePortfolioSection';
import { HomeWhySection } from '@/components/home/HomeWhySection';
import { HomeCTA } from '@/components/home/HomeCTA';
import { HomeServiceSection } from '@/components/home/HomeServiceSection';
import { HomeFAQSection } from '@/components/home/HomeFAQSection';

export function Home() {
  return (
    <div>
      <HomeHero />
      <HomeWhySection />
      <HomeServiceSection />
      <HomePortfolioSection />
      <HomeFAQSection />
      <HomeCTA />
    </div>
  );
}
