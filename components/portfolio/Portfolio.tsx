import { PortfolioList } from '@/components/portfolio/PortfolioList';

export function Portfolio() {
  return (
    <main>
      <div className="header-offset">
        <section className="site-width pt-14 md:pt-20">
          <div className="space-y-4 md:space-y-6">
            <h1 className="section-title">Portfolio</h1>

            <p className="section-description">
              실제 프로젝트를 통해 완성한 홈페이지를 소개합니다. <br />
              디자인뿐만 아니라 운영 편의성과 사용자 경험까지 고려한 결과물을
              확인해보세요.
            </p>
          </div>

          <PortfolioList />
        </section>
      </div>
    </main>
  );
}
