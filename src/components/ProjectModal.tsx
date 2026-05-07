import { useState } from 'react'

interface ProjectModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  fullDescription: string
  tags: string[]
  images: string[]
}

export default function ProjectModal({
  isOpen,
  onClose,
  title,
  fullDescription,
  tags,
  images,
}: ProjectModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  if (!isOpen) return null

  const currentImage = images && images.length > 0 ? images[currentImageIndex] : null

  const goToPrevious = () => {
    if (!images || images.length === 0) return
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const goToNext = () => {
    if (!images || images.length === 0) return
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
      <div className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-4xl border border-white/10 bg-slate-950 shadow-2xl">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-6 top-6 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-white transition hover:bg-slate-800"
        >
          <span className="text-2xl leading-none">×</span>
        </button>

        {/* Image Carousel */}
        {currentImage && (
          <div className="relative h-96 w-full overflow-hidden bg-slate-800">
            <img
              src={currentImage}
              alt={`${title} - ${currentImageIndex + 1}`}
              className="h-full w-full object-cover"
            />

            {/* Image counter */}
            {images && images.length > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/60 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
                {currentImageIndex + 1} / {images.length}
              </div>
            )}

            {/* Previous button */}
            {images && images.length > 1 && (
              <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-900/90 text-white transition hover:bg-slate-900"
              >
                ‹
              </button>
            )}

            {/* Next button */}
            {images && images.length > 1 && (
              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-900/90 text-white transition hover:bg-slate-900"
              >
                ›
              </button>
            )}
          </div>
        )}

        {/* Content */}
        <div className="space-y-6 p-8">
          <div>
            <h2 className="text-3xl font-semibold text-white">{title}</h2>
            <p className="mt-4 text-base leading-7 text-slate-300">{fullDescription}</p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-slate-900 px-4 py-2 text-sm font-medium text-slate-200"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Image thumbnails */}
          {images && images.length > 1 && (
            <div className="space-y-2">
              <p className="text-sm font-medium text-slate-400">Gallery</p>
              <div className="flex gap-2 overflow-x-auto pb-2">
                {images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`h-16 w-16 shrink-0 rounded-lg border-2 transition ${
                      index === currentImageIndex
                        ? 'border-sky-500'
                        : 'border-slate-700 hover:border-slate-600'
                    }`}
                  >
                    <img src={img} alt={`Thumbnail ${index + 1}`} className="h-full w-full object-cover rounded-md" />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
