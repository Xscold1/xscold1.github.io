export default function Contact() {
  return (
    <section id="contact" className="bg-slate-900 py-20 text-slate-100">
      <div className="mx-auto max-w-4xl px-6 sm:px-8 lg:px-10">
        <div className="rounded-4xl bg-slate-950 p-10 shadow-none">
          <div className="text-center">
            <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Let's Work Together</h2>
            <p className="mt-3 text-base leading-7 text-slate-400">
              Have a project in mind? Let's talk about it.
            </p>
          </div>

          <form className="mt-10 space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="text-sm font-medium text-slate-300">Name</span>
                <input
                  type="text"
                  placeholder="Your name"
                  className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-white outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-500/20"
                />
              </label>

              <label className="block">
                <span className="text-sm font-medium text-slate-300">Email</span>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-white outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-500/20"
                />
              </label>
            </div>

            <label className="block">
              <span className="text-sm font-medium text-slate-300">Message</span>
              <textarea
                rows={6}
                placeholder="Tell me about your project..."
                className="mt-2 w-full rounded-3xl border border-slate-700 bg-slate-900 px-4 py-4 text-sm text-white outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-500/20"
              />
            </label>

            <button
              type="submit"
              className="w-full rounded-3xl bg-linear-to-r from-sky-500 via-violet-500 to-fuchsia-500 px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-sky-500/30 transition hover:-translate-y-0.5"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
