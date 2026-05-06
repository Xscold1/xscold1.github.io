import { useEffect, useState } from 'react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const savedTheme = window.localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const isDark = savedTheme ? savedTheme === 'dark' : prefersDark
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    setDarkMode(isDark)
  }, [])

  const toggleDarkMode = () => {
    const nextDark = !document.documentElement.classList.contains('dark')
    document.documentElement.classList.toggle('dark')
    window.localStorage.setItem('theme', nextDark ? 'dark' : 'light')
    setDarkMode(nextDark)
  }

  const handleLinkClick = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 text-slate-950 shadow-sm shadow-slate-900/5 backdrop-blur-xl transition duration-300 dark:border-white/10 dark:bg-slate-950/95 dark:text-white dark:shadow-slate-950/30">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8">
        <a href="#home" className="inline-flex items-center gap-3 text-lg font-semibold tracking-tight text-slate-950 dark:text-white">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-linear-to-br from-sky-500 via-violet-500 to-fuchsia-500 text-base font-black text-white shadow-xl shadow-sky-500/20">
            VIR
          </span>
        </a>

        <button
          type="button"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-300 bg-white text-slate-950 transition hover:border-slate-400 hover:bg-slate-100 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:border-sky-400/40 dark:hover:bg-slate-900/80 md:hidden"
        >
          <span className="relative block h-0.5 w-5 rounded-full bg-current before:absolute before:-top-2 before:block before:h-0.5 before:w-5 before:rounded-full before:bg-current after:absolute after:top-2 after:block after:h-0.5 after:w-5 after:rounded-full after:bg-current" />
        </button>

        <div
          className={`absolute inset-x-4 top-full z-40 mt-3 rounded-3xl border border-slate-200 bg-white/95 p-5 shadow-2xl shadow-slate-900/10 backdrop-blur-xl transition-all duration-200 md:static md:top-auto md:z-0 md:m-0 md:flex md:w-auto md:translate-y-0 md:rounded-none md:border-0 md:bg-transparent md:p-0 md:shadow-none dark:border-white/10 dark:bg-slate-950/95 dark:shadow-slate-950/40 ${isMenuOpen ? 'block' : 'hidden'}`}
        >
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="rounded-full px-4 py-3 text-sm font-medium text-slate-950 transition hover:bg-slate-100 hover:text-sky-600 md:px-0 md:py-0 md:bg-transparent md:hover:bg-transparent dark:text-slate-200 dark:hover:bg-slate-900/10 dark:hover:text-sky-300"
              >
                {link.label}
              </a>
            ))}

            <button
              type="button"
              onClick={toggleDarkMode}
              aria-label="Toggle dark mode"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-950 transition hover:border-slate-400 hover:bg-slate-100 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:border-sky-400/40 dark:hover:bg-slate-900/10 md:px-0 md:py-0 md:border-none md:bg-transparent md:hover:bg-slate-900/10"
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
