import {
  LifeBuoyIcon,
  type LucideIcon,
  ShieldCheckIcon,
  WrenchIcon,
} from 'lucide-react';
import { BounceIn, FadeUp } from '@/components/common';

const includedItems: {
  label: string;
  title: string;
  description: string[];
  Icon: LucideIcon;
}[] = [
  {
    label: 'Ongoing Maintenance',
    title: '지속적인 유지보수',
    description: [
      '홈페이지 오픈 이후에도 버그 수정과 기능 개선을 지속적으로 제공하며,',
      '안정적인 운영을 함께합니다.',
    ],
    Icon: WrenchIcon,
  },
  {
    label: 'Dedicated Support',
    title: '담당자가 바뀌지 않는 관리',
    description: [
      '처음 상담부터 제작, 유지보수까지',
      '같은 개발자가 직접 책임지고 함께합니다.',
    ],
    Icon: LifeBuoyIcon,
  },
  {
    label: 'Reliable Operation',
    title: '안정적인 운영 환경',
    description: [
      '보안 업데이트와 서버 운영을 꾸준히 관리하여',
      '언제나 안정적으로 홈페이지를 운영할 수 있습니다.',
    ],
    Icon: ShieldCheckIcon,
  },
];

export function HomeServiceSection() {
  return (
    <section className="relative isolate overflow-hidden bg-zinc-50 py-24 md:py-32">
      <div className="site-width">
        <FadeUp>
          <h2 className="section-title uppercase">What You Get</h2>
        </FadeUp>

        <FadeUp transition={{ delay: 0.2 }}>
          <p className="section-description mt-4 max-w-2xl md:mt-6">
            제작부터 운영, 검색 노출과 유지보수까지
            <br />
            병원 홈페이지에 필요한 기본 요소를 한 번에 제공합니다.
          </p>
        </FadeUp>

        <div className="mt-14 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.92fr)] lg:items-center lg:gap-16">
          <div className="aspect-square rounded-xl bg-neutral-200" />

          <div className="space-y-0">
            {includedItems.map(({ label, title, description, Icon }, index) => (
              <article key={label} className="group py-6 md:py-7">
                <div className="grid grid-cols-[auto_1fr] gap-4 md:gap-5">
                  <BounceIn transition={{ delay: 0.2 + index * 0.12 }}>
                    <div className="bg-secondary/10 text-primary flex size-11 items-center justify-center rounded-full transition-colors duration-300 md:size-12">
                      <Icon className="size-5" aria-hidden="true" />
                    </div>
                  </BounceIn>

                  <FadeUp transition={{ delay: 0.4 + index * 0.12 }}>
                    <p className="label text-primary font-semibold uppercase">
                      {label}
                    </p>

                    <h3 className="card-title mt-2">{title}</h3>

                    <div className="card-description mt-3 leading-6">
                      {description.map((line) => (
                        <p key={line}>{line}</p>
                      ))}
                    </div>
                  </FadeUp>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
