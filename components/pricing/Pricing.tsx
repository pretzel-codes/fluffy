import {
  CheckIcon,
  ShieldCheckIcon,
  SparklesIcon,
  WrenchIcon,
} from 'lucide-react';
import { FadeUp } from '@/components/common';
import { PricingPlan } from '@/components/pricing/PricingPlan';

const commonItems = [
  '반응형 웹',
  'SEO 기본 최적화',
  '관리자(Admin)',
  '상담 채널 연동',
  'SSL 적용',
  '도메인 연결 지원',
  '기본 보안 설정',
] as const;

const maintenanceItems = [
  '관리자 업데이트',
  '기능 개선',
  '버그 수정',
  '보안 업데이트',
  '서버 운영 지원',
  '간단한 콘텐츠 수정 지원',
] as const;

export function Pricing() {
  return (
    <main className="bg-white">
      <div className="site-width header-offset">
        <PricingPlan />
      </div>

      <section className="bg-zinc-50 py-20 md:py-24">
        <div className="site-width">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
            <FadeUp>
              <div className="flex items-center gap-3">
                <div className="bg-secondary/10 text-primary flex size-11 items-center justify-center rounded-full">
                  <ShieldCheckIcon className="size-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="label text-primary font-semibold uppercase">
                    Included
                  </p>
                  <h2 className="card-title mt-1">모든 플랜 공통 제공</h2>
                </div>
              </div>
            </FadeUp>

            <FadeUp transition={{ delay: 0.15 }}>
              <ul className="grid gap-3 sm:grid-cols-2">
                {commonItems.map((item) => (
                  <li
                    key={item}
                    className="flex min-h-12 items-center gap-3 rounded-lg border border-zinc-200 bg-white px-4 py-3 text-sm font-medium text-zinc-700"
                  >
                    <CheckIcon
                      className="text-primary size-4 shrink-0"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </FadeUp>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="site-width">
          <FadeUp>
            <article className="grid gap-8 rounded-lg border border-zinc-200 bg-white p-6 shadow-sm md:p-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center">
              <div>
                <div className="bg-secondary/10 text-primary flex size-11 items-center justify-center rounded-full">
                  <WrenchIcon className="size-5" aria-hidden="true" />
                </div>

                <p className="label text-primary mt-6 font-semibold uppercase">
                  Maintenance
                </p>
                <h2 className="section-title mt-3 text-2xl md:text-4xl">
                  월 100,000원~
                </h2>
                <p className="section-description mt-4 max-w-xl text-zinc-600">
                  홈페이지 제작 이후에도 지속적으로 관리해드립니다.
                </p>
              </div>

              <ul className="grid gap-3 sm:grid-cols-2">
                {maintenanceItems.map((item) => (
                  <li
                    key={item}
                    className="flex min-h-12 items-center gap-3 rounded-lg bg-zinc-50 px-4 py-3 text-sm font-medium text-zinc-700"
                  >
                    <SparklesIcon
                      className="text-primary size-4 shrink-0"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </FadeUp>
        </div>
      </section>
    </main>
  );
}
