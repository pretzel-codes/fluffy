import { BounceIn, FadeUp } from '@/components/common';

export function HomeCTA() {
  return (
    <section className="bg-white px-4 py-4 md:py-12">
      <div className="site-width bg-primary relative overflow-hidden rounded-2xl px-0 text-white md:rounded-3xl">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.28)_1px,transparent_0)] bg-size-[18px_18px] opacity-40 md:bg-size-[22px_22px] md:opacity-50" />
        <div className="pointer-events-none absolute right-[-35%] bottom-[-18%] h-72 w-72 rounded-full bg-white/10 blur-3xl md:right-[-12%] md:bottom-[-30%] md:h-120 md:w-120" />

        <div className="relative flex min-h-88 items-center justify-center px-6 py-12 text-center md:h-120 md:justify-between md:px-20 md:py-0 md:text-left">
          <div className="w-full max-w-2xl">
            <BounceIn transition={{ delay: 0.2 }}>
              <p className="inline-block rounded-full bg-white/10 px-3 py-1.5 text-xs md:px-4 md:text-sm">
                Your Next Website
              </p>
            </BounceIn>

            <FadeUp transition={{ delay: 0.4 }}>
              <h2 className="section-title mt-4 md:mt-6">
                환자에게는 신뢰를,
                <br />
                병원에는 더 편리한 운영을.
              </h2>
            </FadeUp>

            <FadeUp transition={{ delay: 0.6 }}>
              <p className="section-description mt-4 md:mt-6">
                홈페이지 제작부터 관리자 시스템, 유지보수까지.
                <br />
                플러피가 함께합니다.
              </p>
            </FadeUp>

            <BounceIn transition={{ delay: 1.0 }}>
              <button
                type="button"
                className="text-primary mt-7 w-full max-w-56 cursor-pointer rounded-md bg-white/95 px-10 py-2.5 text-sm font-semibold shadow-sm transition-colors hover:bg-white md:mt-8 md:w-auto md:max-w-none md:px-12 md:text-base"
              >
                문의하기
              </button>
            </BounceIn>
          </div>
        </div>
      </div>
    </section>
  );
}
