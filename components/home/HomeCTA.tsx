export function HomeCTA() {
  return (
    <section className="bg-white py-12">
      <div className="site-width rounded-3xl bg-white py-20 md:py-32">
        <div className="text-center">
          <div>
            <p className="bg-primary/10 text-primary inline-block rounded-full px-4 py-1.5 text-sm">
              Your Next Website
            </p>

            <h2 className="section-title mt-4 md:mt-6">
              환자에게는 신뢰를,
              <br />
              병원에는 더 편리한 운영을.
            </h2>

            <p className="section-description mt-4 md:mt-6">
              홈페이지 제작부터 관리자 시스템, 유지보수까지.
              <br />
              플러피가 함께합니다.
            </p>

            <button
              type="button"
              className="bg-primary mt-6 rounded-md px-12 py-2.5 font-semibold text-white md:mt-8"
            >
              문의하기
            </button>
          </div>

          {/*<div className="flex items-end justify-end">*/}
          {/*  <Image*/}
          {/*    src="/images/home-cta-welcome.png"*/}
          {/*    alt="환영 인사를 건네는 일러스트"*/}
          {/*    width={618}*/}
          {/*    height={618}*/}
          {/*    className="h-auto w-full max-w-md object-contain md:max-w-lg"*/}
          {/*  />*/}
          {/*</div>*/}
        </div>
      </div>
    </section>
  );
}
