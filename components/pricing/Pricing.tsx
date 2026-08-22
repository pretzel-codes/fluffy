import { PricingCommonFeatures } from '@/components/pricing/PricingCommonFeatures';
import { PricingPlan } from '@/components/pricing/PricingPlan';
import { HomeCTA } from '@/components/home/HomeCTA';

export function Pricing() {
  return (
    <main className="bg-white">
      <div className="">
        <PricingPlan />
        <PricingCommonFeatures />
        <HomeCTA />
      </div>
    </main>
  );
}
