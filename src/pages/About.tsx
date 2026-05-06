import { useEffect, useRef } from 'react'
import SkillBadge from '../components/SkillBadge'

const skills = [
  { name: 'JavaScript', icon: 'devicon-javascript-plain colored', color: 'bg-yellow-400 text-slate-950' },
  { name: 'TypeScript', icon: 'devicon-typescript-plain colored', color: 'bg-sky-500 text-white' },
  { name: 'React', icon: 'devicon-react-plain colored', color: 'bg-cyan-500 text-slate-950' },
  { name: 'Node.js', icon: 'devicon-nodejs-plain colored', color: 'bg-emerald-500 text-slate-950' },
  { name: 'Express.js', icon: 'devicon-express-plain colored', color: 'bg-emerald-500 text-slate-950' },
  { name: 'Python', icon: 'devicon-python-plain colored', color: 'bg-slate-800 text-white' },
  { name: 'PostgreSQL', icon: 'devicon-postgresql-plain colored', color: 'bg-sky-900 text-white' },
  { name: 'MongoDB', icon: 'devicon-mongodb-plain colored', color: 'bg-emerald-800 text-white' },
  { name: 'Linux', icon: 'devicon-linux-plain colored', color: 'bg-sky-600 text-white' },
  { name: 'Git', icon: 'devicon-git-plain colored', color: 'bg-orange-600 text-white' },
  { name: 'Tailwind', icon: 'devicon-tailwindcss-plain colored', color: 'bg-sky-400 text-slate-950' },
  { name: 'REST APIs', icon: 'devicon-restapi-plain colored', color: 'bg-slate-700 text-white' },
  { name: 'Bootstrap', icon: 'devicon-bootstrap-plain colored', color: 'bg-slate-700 text-white' },
  { name: 'MySQL', icon: 'devicon-mysql-plain colored', color: 'bg-slate-700 text-white' },
]

export default function About() {
  const carouselRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const container = carouselRef.current
    if (!container) return

    const speed = 1
    let frameId: number

    const animate = () => {
      if (!container) return

      const maxScroll = container.scrollWidth / 2
      if (maxScroll <= 0) {
        frameId = window.requestAnimationFrame(animate)
        return
      }

      const nextScroll = container.scrollLeft + speed
      container.scrollLeft = nextScroll >= maxScroll ? nextScroll - maxScroll : nextScroll
      frameId = window.requestAnimationFrame(animate)
    }

    frameId = window.requestAnimationFrame(animate)
    return () => window.cancelAnimationFrame(frameId)
  }, [])
  return (
    <section id="about" className="px-6 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl space-y-10">
        <div className="rounded-4xl border border-slate-200/70 bg-white/90 p-10 shadow-[0_30px_80px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-white/5 dark:shadow-[0_30px_80px_rgba(15,23,42,0.25)]">
          <h2 className="text-4xl font-semibold text-slate-950 dark:text-white">About Me</h2>
          <div className="mt-6 space-y-6 text-base leading-8 text-slate-700 dark:text-slate-300">
            <p>
              I’m a full-stack developer with over 2 years of experience building web applications using Node.js, PHP, and modern JavaScript frameworks.
            </p>
            <p>
              In my current role, I’ve worked on internal systems such as an HRIS and applicant tracking platform used by over 200 employees. These systems handle daily submissions, automate hiring workflows, and centralize data that was previously managed manually.
            </p>
            <p>
              My work involves building REST APIs, handling data validation, and developing responsive interfaces using tools like React, Alpine.js, and TypeScript. I’ve also contributed to improving code quality through practices like static analysis and structured validation.
            </p>
            <p>
              I’m comfortable working across the stack and prefer keeping things simple and maintainable. I spend most of my time improving existing systems—fixing issues, refining logic, and adding features that make applications more reliable and easier to use.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="inline-flex h-12 items-center justify-center rounded-full bg-sky-500 px-5 text-sm font-semibold text-white transition hover:bg-sky-400"
            >
              Reach Out
            </a>
            <a
              href="#projects"
              className="inline-flex h-12 items-center justify-center rounded-full border border-slate-300 bg-white/90 px-5 text-sm font-semibold text-slate-950 transition hover:border-slate-400 hover:bg-slate-100 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:border-sky-400/40 dark:hover:bg-slate-900/10"
            >
              View Projects
            </a>
          </div>
        </div>

        <div className="rounded-4xl border border-slate-200/70 bg-white/90 p-8 shadow-[0_30px_80px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-white/5 dark:shadow-[0_30px_80px_rgba(15,23,42,0.25)]">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h3 className="text-2xl font-semibold text-slate-950 dark:text-white">Skills & Technologies</h3>
              <p className="mt-2 max-w-2xl text-sm text-slate-500 dark:text-slate-400">
                Core tools and frameworks I use to build fast, maintainable products.
              </p>
            </div>
            <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-700 dark:bg-slate-900 dark:text-slate-200">
              Swipe to explore
            </span>
          </div>

          <div ref={carouselRef} className="mt-6 overflow-x-auto pb-4 scroll-smooth scrollbar-hide">
            <div className="flex min-w-max gap-4 snap-x snap-mandatory">
              {[...skills, ...skills].map((skill, index) => (
                <SkillBadge key={`${skill.name}-${index}`} name={skill.name} icon={skill.icon} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
