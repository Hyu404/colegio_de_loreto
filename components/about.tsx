import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const stats = [
  { value: '5', label: 'Degree Programs' },
  { value: '2026', label: 'Founding Year' },
  { value: '100%', label: 'Community Focused' },
  { value: '1', label: 'Vision for Excellence' },
]

export function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-4 py-20 md:px-6">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
          <Image
            src="/images/campus-building.png"
            alt="Colegio De Loreto campus"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute -bottom-0 left-0 flex items-center gap-3 rounded-tr-2xl bg-navy px-5 py-4">
            <span className="font-serif text-3xl font-bold text-gold">CDL</span>
            <span className="text-xs font-medium leading-tight text-primary-foreground/90">
              Colegio De Loreto
              <br />
              Est. 2026
            </span>
          </div>
        </div>

        <div>
          <span className="mb-3 inline-block rounded-full bg-accent px-3 py-1 text-xs font-bold uppercase tracking-wide text-navy">
            About the College
          </span>
          <h2 className="font-serif text-3xl font-bold leading-tight text-navy text-balance md:text-4xl">
            Igniting excellence in Agusan del Sur
          </h2>
          <p className="mt-5 leading-relaxed text-muted-foreground text-pretty">
            Colegio De Loreto is a higher education institution dedicated to providing a learning
            environment rooted in discipline, excellence, commitment, integrity, and relevance. Guided
            by our motto, <span className="font-semibold italic text-navy">Scientia ad Excellentiam</span>{' '}
            — knowledge toward excellence — we prepare students to thrive in their professions and to
            uplift their communities.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground text-pretty">
            From agriculture and enterprise to education, governance, and tourism, our programs are
            designed around the needs of the CARAGA region and the wider world.
          </p>

          <dl className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-card p-4 text-center">
                <dt className="font-serif text-2xl font-bold text-gold-dark md:text-3xl">{s.value}</dt>
                <dd className="mt-1 text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>

          <Button asChild className="mt-8 bg-navy font-semibold text-primary-foreground hover:bg-navy-dark">
            <a href="#programs">
              Discover our programs
              <ArrowRight className="ml-1 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
