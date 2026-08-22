import { CheckIcon } from 'lucide-react';
import { FadeUp } from '@/components/common';
import { cn } from '@/lib/utils';

const commonItems = [
  '반응형 웹',
  'SEO 기본 최적화',
  '관리자(Admin)',
  '기본 보안 설정',
  'SSL 적용',
  '도메인 연결 지원',
] as const;

export function PricingCommonFeatures() {
  const mobileLastRowStartIndex =
    commonItems.length - (commonItems.length % 2 || 2);
  const desktopLastRowStartIndex =
    commonItems.length - (commonItems.length % 3 || 3);

  return (
    <section className="bg-neutral-50 py-24 md:py-32">
      <div className="site-width">
        <div>
          <FadeUp>
            <h2 className="section-title">What&#39;s Included</h2>
          </FadeUp>

          <FadeUp transition={{ delay: 0.2 }}>
            <div className="section-description mt-4 space-y-3 md:mt-6">
              <p>
                플랜과 관계없이 안정적인 홈페이지 운영을 위한
                <br />
                Fluffy의 모든 홈페이지에 기본으로 제공되는 기능입니다.
              </p>
            </div>
          </FadeUp>
        </div>

        <div className="mt-14">
          <FadeUp transition={{ delay: 0.15 }}>
            <ul className="relative grid grid-cols-2 before:absolute before:inset-y-0 before:left-1/2 before:w-px before:bg-zinc-200 sm:grid-cols-3 sm:before:left-[33.333333%] sm:after:absolute sm:after:inset-y-0 sm:after:left-[66.666667%] sm:after:w-px sm:after:bg-zinc-200">
              {commonItems.map((item, index) => (
                <li
                  key={item}
                  className={cn(
                    'flex items-center gap-3 border-b py-4 text-sm font-medium text-zinc-700 last:border-b-0 md:border-zinc-300 md:py-8 md:text-lg',
                    index >= mobileLastRowStartIndex && 'border-b-0',
                    index % 2 === 0 ? 'pr-4' : 'pl-4',
                    index % 3 === 0 && 'sm:pr-8 sm:pl-0',
                    index % 3 === 1 && 'sm:px-8',
                    index % 3 === 2 && 'sm:pr-0 sm:pl-8',
                    index >= desktopLastRowStartIndex
                      ? 'sm:border-b-0'
                      : 'sm:border-b',
                  )}
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
  );
}
