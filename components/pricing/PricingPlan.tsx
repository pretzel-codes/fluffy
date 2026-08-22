import { CheckIcon, MinusIcon, Sparkle } from 'lucide-react';
import { FadeUp } from '@/components/common';
import { cn } from '@/lib/utils';
import { plans } from '@/components/pricing/data';

export function PricingPlan() {
  return (
    <section className="relative overflow-hidden bg-white pt-14 md:pt-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(113,113,122,0.18)_1px,transparent_0)] bg-size-[18px_18px] md:bg-size-[22px_22px]" />

      <div className="site-width relative space-y-14 pt-12 pb-24 md:py-32">
        <div className="space-y-4 md:space-y-6">
          <h1 className="section-title">Plans & Pricing</h1>

          <p className="section-description">
            병원의 규모와 필요한 기능에 맞는 플랜을 선택하세요. <br />
            홈페이지 제작부터 관리자 시스템, 유지보수까지 운영에 필요한 모든
            과정을 함께합니다.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {plans.map((plan, index) => (
            <FadeUp key={plan.name} transition={{ delay: 0.25 + index * 0.1 }}>
              <article
                className={cn(
                  'flex h-full flex-col rounded-xl border bg-white p-6',
                  plan.featured && '',
                )}
                style={{
                  boxShadow: plan.featured
                    ? 'rgba(16, 65, 176, 0.4) 0px 0px 12px'
                    : 'rgba(0, 0, 0, 0.1) 0px 4px 12px',
                }}
              >
                <div className="flex items-center gap-2">
                  <h2 className="card-title">{plan.name}</h2>
                  {plan.featured && (
                    <Sparkle className="text-primary fill-primary size-3.5" />
                  )}
                </div>

                <p className="mt-1 text-xl font-bold md:text-3xl">
                  {plan.price}
                </p>

                <p className="card-description mt-2 md:mt-4">
                  {plan.description}
                </p>

                <div className="mt-4 flex-1 md:mt-8">
                  <p className="text-sm font-semibold">포함 기능</p>
                  {plan.includedIntro && (
                    <p className="mt-3 text-sm font-medium text-zinc-700">
                      {plan.includedIntro}
                    </p>
                  )}

                  <ul className="mt-2 space-y-1.5 md:mt-4 md:space-y-3">
                    {plan.included.map((item) => (
                      <li
                        key={item}
                        className="grid grid-cols-[auto_1fr] gap-2.5 text-sm text-zinc-700"
                      >
                        <CheckIcon
                          className="text-primary mt-0.5 size-4"
                          aria-hidden="true"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {plan.excluded.length > 0 && (
                  <div className="mt-6 border-t border-zinc-200 pt-6">
                    <p className="text-sm font-semibold text-zinc-500">
                      제외 기능
                    </p>
                    <ul className="mt-2 space-y-1.5 md:mt-4 md:space-y-3">
                      {plan.excluded.map((item) => (
                        <li
                          key={item}
                          className="grid grid-cols-[auto_1fr] gap-2.5 text-sm text-zinc-500"
                        >
                          <MinusIcon
                            className="mt-0.5 size-4"
                            aria-hidden="true"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </article>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
