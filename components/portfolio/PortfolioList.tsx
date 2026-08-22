import Image from 'next/image';
import { ArrowUpRightIcon } from 'lucide-react';
import { portfolioItems } from '@/components/portfolio/data';

export function PortfolioList() {
  return (
    <div className="grid gap-x-5 gap-y-12 pt-12 pb-24 sm:grid-cols-2 md:grid-cols-3 md:pt-16 md:pb-32">
      {portfolioItems.map(({ title, description, thumbnail, link }) => (
        <a
          key={title}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${title} 웹사이트 새 창에서 보기`}
          className="group block"
        >
          <article>
            <div className="bg-secondary/10 relative aspect-4/3 overflow-hidden rounded-2xl">
              {thumbnail ? (
                <Image
                  src={thumbnail}
                  alt={`${title} 프로젝트 썸네일`}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
              ) : (
                <span className="absolute inset-0 flex items-center justify-center text-sm font-medium text-neutral-500">
                  coming soon
                </span>
              )}

              <span className="absolute top-4 right-4 flex size-10 items-center justify-center rounded-full bg-white text-neutral-900 shadow-sm transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                <ArrowUpRightIcon className="size-5" aria-hidden="true" />
              </span>
            </div>

            <div className="mt-2 md:mt-4">
              <h2 className="card-title">{title}</h2>

              {description && <p className="card-description">{description}</p>}
            </div>
          </article>
        </a>
      ))}
    </div>
  );
}
