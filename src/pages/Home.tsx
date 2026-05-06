export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-50 text-slate-950 dark:bg-slate-950 dark:text-slate-100">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.15),_transparent_18%),radial-gradient(circle_at_20%_10%,_rgba(168,85,247,0.12),_transparent_16%),radial-gradient(circle_at_80%_20%,_rgba(139,92,246,0.1),_transparent_14%),linear-gradient(180deg,_#f8fbff_0%,_#eef2ff_100%)] dark:bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.2),_transparent_18%),radial-gradient(circle_at_20%_10%,_rgba(168,85,247,0.18),_transparent_16%),radial-gradient(circle_at_80%_20%,_rgba(139,92,246,0.16),_transparent_14%),linear-gradient(180deg,_#020617_0%,_#050b1d_100%)]" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 py-10 sm:px-8 lg:px-10">
        <section id="home" className="space-y-8 text-center">

          <div className="space-y-6">
            <h1 className="text-5xl font-black tracking-tight text-slate-950 sm:text-6xl dark:text-white">
              Full Stack <span className="bg-linear-to-r from-sky-500 via-violet-500 to-fuchsia-500 bg-clip-text text-transparent">Web Developer</span>
            </h1>
            <p className="mx-auto max-w-2xl text-base leading-8 text-slate-700 sm:text-lg dark:text-slate-200 my-0">
              Vash Ivan Rey S. Ramos
            </p>
            <p className="mx-auto max-w-2xl text-base leading-8 text-slate-700 sm:text-lg dark:text-slate-200 my-0">
              Full-stack developer building practical web applications.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-full bg-linear-to-r from-sky-500 via-violet-500 to-fuchsia-500 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/25 transition hover:-translate-y-0.5"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white/90 px-7 py-3 text-sm font-semibold text-slate-950 transition hover:border-slate-400 hover:bg-slate-100 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:border-sky-400/40 dark:hover:bg-slate-900/10"
            >
              Get In Touch
            </a>
          </div>
        </section>
      </div>
    </main>
  )
}
