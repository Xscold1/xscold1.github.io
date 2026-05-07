import { useState } from 'react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleLinkClick = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/95 text-white shadow-slate-950/30 shadow-sm backdrop-blur-xl transition duration-300">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8">
        <a href="#home" className="inline-flex items-center gap-3 text-lg font-semibold tracking-tight text-white">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-linear-to-br from-sky-500 via-violet-500 to-fuchsia-500 text-base font-black text-white shadow-xl shadow-sky-500/20">
            VIR
          </span>
        </a>

        <button
          type="button"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white transition hover:border-sky-400/40 hover:bg-slate-900/80 md:hidden"
        >
          <span className="relative block h-0.5 w-5 rounded-full bg-current before:absolute before:-top-2 before:block before:h-0.5 before:w-5 before:rounded-full before:bg-current after:absolute after:top-2 after:block after:h-0.5 after:w-5 after:rounded-full after:bg-current" />
        </button>

        <div
          className={`absolute inset-x-4 top-full z-40 mt-3 rounded-3xl border border-white/10 bg-slate-950/95 p-5 shadow-2xl shadow-slate-950/40 backdrop-blur-xl transition-all duration-200 md:static md:top-auto md:z-0 md:m-0 md:flex md:w-auto md:translate-y-0 md:rounded-none md:border-0 md:bg-transparent md:p-0 md:shadow-none ${isMenuOpen ? 'block' : 'hidden'}`}
        >
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="rounded-full px-4 py-3 text-sm font-medium text-slate-200 transition hover:bg-slate-900/10 hover:text-sky-300 md:px-0 md:py-0 md:bg-transparent md:hover:bg-transparent"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
