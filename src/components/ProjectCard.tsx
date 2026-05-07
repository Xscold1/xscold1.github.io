interface ProjectCardProps {
  title: string
  shortDescription: string
  tags: string[]
  accent: string
  image?: string | null
  onClick?: () => void
}

export default function ProjectCard({ title, shortDescription, tags, accent, image, onClick }: ProjectCardProps) {
  return (
    <article
      onClick={onClick}
      className="cursor-pointer overflow-hidden rounded-4xl border border-white/10 bg-white/5 shadow-[0_25px_60px_rgba(15,23,42,0.25)] backdrop-blur-xl transition hover:-translate-y-1 hover:shadow-[0_35px_90px_rgba(15,23,42,0.15)]"
    >
      <div className={`h-52 w-full overflow-hidden ${!image ? `bg-linear-to-br ${accent}` : ''}`}>
        {image ? (
          <img src={image} alt={title} className="h-full w-full object-cover" />
        ) : (
          <div className={`h-full w-full bg-linear-to-br ${accent}`} />
        )}
      </div>
      <div className="space-y-4 p-6">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="text-sm leading-7 text-slate-300">{shortDescription}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 bg-slate-950/80 px-3 py-1 text-xs font-medium text-slate-200"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}
