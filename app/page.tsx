export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-100 px-6 py-24">
      <section className="w-full max-w-3xl rounded-[2rem] border border-zinc-200 bg-white p-10 shadow-[0_24px_80px_-32px_rgba(0,0,0,0.25)]">
        <p className="text-sm font-semibold tracking-[0.32em] text-zinc-500 uppercase">
          Next.js 16 Starter
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl">
          설치와 기본 설정이 완료되었습니다.
        </h1>
        <p className="mt-4 text-base leading-7 text-zinc-600 sm:text-lg">
          App Router 기반 프로젝트에 TypeScript, ESLint, Prettier, Tailwind
          CSS가 함께 구성되어 있습니다.
        </p>
      </section>
    </main>
  );
}
