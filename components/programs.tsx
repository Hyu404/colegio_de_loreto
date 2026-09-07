import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { programs } from '@/lib/site-data'

export function Programs() {
  return (
    <section id="programs" className="bg-muted/60 py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="mb-3 inline-block rounded-full bg-accent px-3 py-1 text-xs font-bold uppercase tracking-wide text-navy">
            Academic Programs
          </span>
          <h2 className="font-serif text-3xl font-bold text-navy text-balance md:text-4xl">
            Choose your path to excellence
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground text-pretty">
            Five career-focused degree programs designed to build in-demand skills and open doors across
            industries.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((p) => (
            <article
              key={p.code}
              className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={p.image || '/placeholder.svg'}
                  alt={p.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <span className="absolute left-3 top-3 rounded-md bg-navy/95 px-2.5 py-1 text-xs font-bold text-gold">
                  {p.code}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-serif text-lg font-bold leading-snug text-navy">{p.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground text-pretty">
                  {p.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.careers.slice(0, 3).map((c) => (
                    <span
                      key={c}
                      className="rounded-full bg-accent px-2.5 py-1 text-[11px] font-medium text-navy"
                    >
                      {c}
                    </span>
                  ))}
                </div>
                <a
                  href="#admissions"
                  className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-gold-dark transition-colors hover:text-navy"
                >
                  Learn more
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}

          {/* CTA card */}
          <article className="flex flex-col justify-center gap-3 rounded-xl bg-navy p-7 text-primary-foreground shadow-sm">
            <h3 className="font-serif text-xl font-bold text-balance">Not sure which program fits you?</h3>
            <p className="text-sm leading-relaxed text-primary-foreground/80">
              Talk to our admissions team and we&apos;ll help you find the right path for your goals.
            </p>
            <a
              href="#contact"
              className="mt-2 inline-flex w-fit items-center gap-1 rounded-md bg-gold px-4 py-2 text-sm font-bold text-navy-dark transition-colors hover:bg-gold-dark"
            >
              Contact Admissions
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </article>
        </div>
      </div>
    </section>
  )
}
