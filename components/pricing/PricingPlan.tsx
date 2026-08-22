import { CheckIcon, MinusIcon, StarIcon } from 'lucide-react';
import { FadeUp } from '@/components/common';
import { cn } from '@/lib/utils';

type Plan = {
  name: string;
  price: string;
  description: string;
  badge?: string;
  includedIntro: string;
  included: string[];
  excluded: string[];
  featured?: boolean;
};

const plans: Plan[] = [
  {
    name: 'Starter',
    price: '₩3,000,000~',
    description: '처음 홈페이지를 제작하는 병원을 위한 기본 플랜',
    includedIntro: '',
    included: [
      '반응형 웹',
      'SEO 기본 최적화',
      '상담 채널 연동 (카카오톡 · 네이버톡톡 · 전화 등)',
      '관리자(Admin)',
      '팝업 관리',
      '카테고리 관리',
      '중분류 관리',
      '이미지형 이벤트 관리',
      '공지사항 관리',
      '주의사항 관리',
    ],
    excluded: [
      '상품/시술 관리',
      '상품형 이벤트 관리',
      '예약 관리',
      '커스텀 기능 개발',
    ],
  },
  {
    name: 'Professional',
    price: '₩5,000,000~',
    description:
      '직접 홈페이지를 운영하고 다양한 이벤트를 관리하는 병원을 위한 플랜',
    badge: 'Most Popular',
    includedIntro: 'Starter의 모든 기능 +',
    included: [
      '상품/시술 관리',
      '상품형 이벤트 관리',
      '예약 관리',
      '관리자 기능 전체 제공',
    ],
    excluded: [],
    featured: true,
  },
  {
    name: 'Signature',
    price: '₩6,000,000~',
    description: '브랜드에 맞는 맞춤형 홈페이지를 원하는 병원을 위한 플랜',
    includedIntro: 'Professional의 모든 기능 +',
    included: [
      '원하는 기능 커스터마이징',
      '맞춤 관리자 기능 개발',
      '외부 API 연동',
      '예약/CRM 연동',
      '기타 기능 개발',
    ],
    excluded: [],
  },
] satisfies Plan[];

export function PricingPlan() {
  return (
    <section className="relative isolate overflow-hidden py-24 md:py-32">
      <div className="site-width">
        <div className="mt-14 grid gap-5 lg:grid-cols-3 lg:items-stretch">
          {plans.map((plan, index) => (
            <FadeUp key={plan.name} transition={{ delay: 0.25 + index * 0.1 }}>
              <article
                className={cn(
                  'flex h-full flex-col rounded-lg border bg-white p-6 shadow-sm md:p-7',
                  plan.featured
                    ? 'border-primary shadow-primary/10 ring-primary/10 ring-2'
                    : 'border-zinc-200',
                )}
              >
                <div className="flex min-h-8 items-center justify-between gap-3">
                  <h2 className="card-title">{plan.name}</h2>
                  {plan.badge ? (
                    <span className="bg-primary text-primary-foreground inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-semibold whitespace-nowrap">
                      <StarIcon className="size-3.5 fill-current" />
                      {plan.badge}
                    </span>
                  ) : null}
                </div>

                <p className="mt-5 text-3xl font-bold tracking-normal md:text-4xl">
                  {plan.price}
                </p>

                <p className="card-description mt-4 min-h-12 leading-6">
                  {plan.description}
                </p>

                <div className="mt-8 flex-1">
                  <p className="text-sm font-semibold">포함 기능</p>
                  {plan.includedIntro ? (
                    <p className="mt-3 text-sm font-medium text-zinc-700">
                      {plan.includedIntro}
                    </p>
                  ) : null}

                  <ul className="mt-4 space-y-3">
                    {plan.included.map((item) => (
                      <li
                        key={item}
                        className="grid grid-cols-[auto_1fr] gap-2.5 text-sm leading-5 text-zinc-700"
                      >
                        <CheckIcon
                          className="text-primary mt-0.5 size-4 shrink-0"
                          aria-hidden="true"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {plan.excluded.length > 0 ? (
                  <div className="mt-8 border-t border-zinc-200 pt-6">
                    <p className="text-sm font-semibold text-zinc-500">
                      제외 기능
                    </p>
                    <ul className="mt-4 space-y-3">
                      {plan.excluded.map((item) => (
                        <li
                          key={item}
                          className="grid grid-cols-[auto_1fr] gap-2.5 text-sm leading-5 text-zinc-500"
                        >
                          <MinusIcon
                            className="mt-0.5 size-4 shrink-0"
                            aria-hidden="true"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </article>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
