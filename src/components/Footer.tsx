export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 text-slate-400">
      <div className="mx-auto flex flex-col gap-6 px-6 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
        <p className="text-sm">© 2026 Vash Ivan Rey S. Ramos. All rights reserved.</p>
        <div className="flex flex-wrap items-center gap-4 text-sm">
          <a href="https://www.linkedin.com/in/xscold/" target="_blank" className="transition hover:text-white">LinkedIn</a>
          <a href="https://github.com/xscold1"  target="_blank" className="transition hover:text-white">GitHub</a>
          <a href="mailto:vashivan116@gmail.com"  target="_blank" className="transition hover:text-white">Email</a>
        </div>
      </div>
    </footer>
  )
}
