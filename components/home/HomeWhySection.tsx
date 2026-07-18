import Image from 'next/image';
import { BounceIn, FadeUp } from '@/components/common';

const whyCards = [
  {
    label: 'Dermatology Expertise',
    title: '피부과를 이해하는 홈페이지',
    description: [
      '피부과 운영 경험을 바탕으로',
      '환자의 흐름과 병원의 운영 방식을 고려해 설계합니다.',
    ],
    imageSrc: '/images/why-dermatology.png',
    imageAlt: '피부과 홈페이지 설계를 상징하는 미로와 전구 일러스트',
  },
  {
    label: 'Built-in Admin',
    title: '직접 관리하는 홈페이지',
    description: [
      '공지사항, 이벤트, 의료진, 시술 관리까지.',
      '개발자를 기다리지 않고',
      '병원에서 직접 쉽고 빠르게 운영할 수 있습니다.',
    ],
    imageSrc: '/images/why-admin.png',
    imageAlt: '관리자 기능과 개발 도구를 상징하는 화면 일러스트',
  },
  {
    label: 'Growth Partner',
    title: '제작이 끝이 아닌 시작',
    description: [
      'SEO 최적화와 지속적인 유지보수,',
      '기능 업데이트까지.',
      '홈페이지가 계속 성장할 수 있도록 함께합니다.',
    ],
    imageSrc: '/images/why-growth.png',
    imageAlt: '홈페이지 성장과 데이터 분석을 상징하는 일러스트',
  },
];

export function HomeWhySection() {
  return (
    <section className="relative isolate overflow-hidden bg-white py-24 md:py-32">
      {/** 격자 배경 */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:72px_72px] opacity-30" />
      <div className="absolute inset-x-0 top-0 -z-10 h-48 bg-linear-to-b from-zinc-100 to-transparent" />

      <div className="site-width">
        <div>
          <FadeUp>
            <h2 className="section-title uppercase">Why Fluffy?</h2>
          </FadeUp>

          <FadeUp transition={{ delay: 0.2 }}>
            <div className="section-description mt-4 space-y-3 md:mt-6">
              <p>
                단순히 보기 좋은 디자인이 아닌, <br />
                병원이 직접 운영하고 성장시킬 수 있는 홈페이지를 만듭니다.
              </p>
              <p>
                제작 이후가 더 중요한 홈페이지. <br />
                그것이 플러피가 생각하는 웹사이트입니다.
              </p>
            </div>
          </FadeUp>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {whyCards.map(({ label, title, description, imageSrc, imageAlt }) => (
            <article
              key={label}
              className="group flex min-h-72 flex-col justify-between rounded-lg bg-white p-6 transition-colors duration-300 hover:border-zinc-400"
              style={{
                boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px',
              }}
            >
              <div>
                <div className="mb-6 flex aspect-video items-center justify-center">
                  <Image
                    src={imageSrc}
                    alt={imageAlt}
                    width={220}
                    height={220}
                    className="h-full w-full object-contain"
                  />
                </div>

                <BounceIn transition={{ delay: 0.2 }}>
                  <p className="bg-secondary/10 text-primary -ml-1 inline-block rounded-full px-3 pt-1.5 pb-1 text-[10px] uppercase md:text-xs">
                    {label}
                  </p>
                </BounceIn>

                <FadeUp transition={{ delay: 0.4 }}>
                  <h3 className="card-title mt-2 md:mt-3">{title}</h3>
                </FadeUp>

                <FadeUp transition={{ delay: 0.6 }}>
                  <div className="card-description mt-4 md:mt-6">
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
    </section>
  );
}
