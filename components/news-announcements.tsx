import Image from 'next/image'
import { ArrowRight, Bell } from 'lucide-react'
import { news, announcements } from '@/lib/site-data'

export function NewsAnnouncements() {
  const [lead, ...rest] = news

  return (
    <section id="news" className="mx-auto max-w-7xl px-4 py-20 md:px-6">
      <div className="grid gap-10 lg:grid-cols-3">
        {/* News */}
        <div className="lg:col-span-2">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <span className="mb-2 inline-block rounded-full bg-accent px-3 py-1 text-xs font-bold uppercase tracking-wide text-navy">
                University News
              </span>
              <h2 className="font-serif text-3xl font-bold text-navy">Latest from CDL</h2>
            </div>
            <a
              href="#news"
              className="hidden items-center gap-1 text-sm font-bold text-gold-dark hover:text-navy sm:inline-flex"
            >
              View all
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <article className="group grid gap-5 overflow-hidden rounded-xl border border-border bg-card shadow-sm sm:grid-cols-2">
            <div className="relative aspect-[16/10] overflow-hidden sm:aspect-auto">
              <Image
                src={lead.image || '/placeholder.svg'}
                alt={lead.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, 33vw"
              />
            </div>
            <div className="flex flex-col justify-center p-5 sm:pl-0 sm:pr-6">
              <div className="mb-2 flex items-center gap-3 text-xs">
                <span className="rounded bg-navy px-2 py-0.5 font-bold text-gold">{lead.category}</span>
                <time className="text-muted-foreground">{lead.date}</time>
              </div>
              <h3 className="font-serif text-xl font-bold leading-snug text-navy text-balance">
                {lead.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground text-pretty">
                {lead.excerpt}
              </p>
            </div>
          </article>

          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {rest.map((item) => (
              <article
                key={item.title}
                className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={item.image || '/placeholder.svg'}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <div className="mb-2 flex items-center gap-3 text-xs">
                    <span className="rounded bg-accent px-2 py-0.5 font-bold text-navy">{item.category}</span>
                    <time className="text-muted-foreground">{item.date}</time>
                  </div>
                  <h3 className="font-serif text-base font-bold leading-snug text-navy text-balance">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground text-pretty">
                    {item.excerpt}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Announcements */}
        <aside id="announcements" className="lg:col-span-1">
          <div className="rounded-xl border border-border bg-card shadow-sm">
            <div className="flex items-center gap-2 rounded-t-xl bg-navy px-5 py-4 text-primary-foreground">
              <Bell className="h-5 w-5 text-gold" />
              <h2 className="font-serif text-lg font-bold">Announcements</h2>
            </div>
            <ul className="divide-y divide-border">
              {announcements.map((a) => (
                <li key={a.title}>
                  <a href="#announcements" className="block px-5 py-4 transition-colors hover:bg-accent">
                    <div className="mb-1 flex items-center gap-2">
                      <span className="rounded bg-accent px-2 py-0.5 text-[11px] font-bold text-navy">
                        {a.tag}
                      </span>
                      <time className="text-xs text-muted-foreground">{a.date}</time>
                    </div>
                    <p className="text-sm font-medium leading-snug text-foreground text-pretty">{a.title}</p>
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#announcements"
              className="flex items-center justify-center gap-1 border-t border-border px-5 py-3 text-sm font-bold text-gold-dark transition-colors hover:bg-accent hover:text-navy"
            >
              View all announcements
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </aside>
      </div>
    </section>
  )
}
