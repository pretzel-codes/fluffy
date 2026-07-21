import Image from 'next/image';
import { BounceIn, FadeUp } from '@/components/common';
import Link from 'next/link';
import { ROUTES } from '@/constants/routes';
import { ArrowRightIcon, ArrowUpRightIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

const portfolioItems = [
  {
    number: '01',
    title: 'Cellence clinic',
    date: '~진행중',
    imageSrc: '',
    link: '',
  },
  {
    number: '02',
    title: 'Newstar clinic',
    date: '2025.12',
    imageSrc: '',
    link: '',
  },
  {
    number: '03',
    title: 'Centumstar clinic',
    date: '2025.05',
    imageSrc: '',
    link: '',
  },
];

export function HomePortfolioSection() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="site-width">
        <FadeUp>
          <h2 className="section-title uppercase">Portfolio</h2>
        </FadeUp>

        <div className="mt-4 flex flex-col items-start gap-4 md:mt-6 md:flex-row md:items-center md:justify-between">
          <FadeUp transition={{ delay: 0.2 }}>
            <p className="section-description">
              브랜드의 개성과 운영 환경을 고려해 제작한
              <br /> Fluffy의 프로젝트를 소개합니다.
            </p>
          </FadeUp>

          <BounceIn>
            <Button
              asChild
              size="lg"
              className="bg-secondary/10 text-primary hover:bg-secondary/20! h-11! w-full justify-between rounded-full px-5! text-sm sm:w-auto sm:justify-center md:h-12! md:px-6! md:text-base"
            >
              <Link href={ROUTES.PORTFOLIO}>
                전체 포트폴리오 보기
                <ArrowRightIcon data-icon="inline-end" className="size-4" />
              </Link>
            </Button>
          </BounceIn>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {portfolioItems.map(
            ({ number, title, date, imageSrc, link }, index) => (
              <FadeUp key={title} transition={{ delay: 0.2 + index * 0.12 }}>
                <Link
                  href={link || ROUTES.PORTFOLIO}
                  aria-label={`${title} 포트폴리오 보기`}
                  className="group block"
                >
                  <article
                    className="relative isolate aspect-4/5 overflow-hidden rounded-3xl bg-zinc-100"
                    style={{
                      boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px',
                    }}
                  >
                    {imageSrc ? (
                      <Image
                        src={imageSrc}
                        alt={`${title} 프로젝트 이미지`}
                        fill
                        sizes="(min-width: 768px) 33vw, 100vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center bg-linear-to-br from-zinc-100 via-zinc-200 to-zinc-300 text-white">
                        <p className="text-lg font-semibold tracking-[0.14em] text-white/80 uppercase md:text-xl">
                          Coming soon
                        </p>
                      </div>
                    )}

                    <span className="absolute top-7 right-7 flex items-center justify-center text-white">
                      <ArrowUpRightIcon
                        className="size-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        aria-hidden="true"
                      />
                    </span>

                    <div className="absolute inset-x-0 bottom-0 p-6 text-white md:p-7">
                      <p className="label text-white/70">{number}</p>
                      <div className="mt-2 flex items-end justify-between gap-4">
                        <h3 className="card-title">{title}</h3>
                        <p className="shrink-0 text-sm font-medium text-white/80 md:text-base">
                          {date}
                        </p>
                      </div>
                    </div>
                  </article>
                </Link>
              </FadeUp>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
