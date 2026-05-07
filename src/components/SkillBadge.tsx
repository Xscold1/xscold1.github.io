interface SkillBadgeProps {
  name: string
  icon?: string
}

export default function SkillBadge({ name, icon }: SkillBadgeProps) {
  const isImageIcon = icon?.startsWith('/') || icon?.match(/\.(svg|png|jpg|jpeg|webp)$/i)

  return (
    <div className="min-w-[16rem] snap-start shrink-0 rounded-4xl border border-white/10 bg-slate-950/90 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.25)] transition hover:-translate-y-1 hover:shadow-[0_25px_80px_rgba(0,0,0,0.35)]">
      <div className="relative mx-auto flex h-20 w-20 items-center justify-center rounded-3xl border border-white/10 bg-transparent shadow-none">
        {icon ? (
          isImageIcon ? (
            <img src={icon} alt={`${name} icon`} className="h-14 w-14 object-contain" />
          ) : (
            <i className={`${icon} text-5xl`} aria-hidden="true" />
          )
        ) : (
          <span className="text-4xl font-bold text-white">{name.slice(0, 2).toUpperCase()}</span>
        )}
      </div>

      <div className="mt-6 text-center">
        <p className="truncate text-base font-semibold text-white">{name}</p>
      </div>
    </div>
  )
}
