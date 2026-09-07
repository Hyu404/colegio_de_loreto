import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { programs } from '@/lib/site-data'

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden">
      <Image
        src="/images/hero-campus.png"
        alt="Colegio De Loreto students on campus"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/95 via-navy-dark/80 to-navy/40" />

      <div className="relative mx-auto flex min-h-[560px] max-w-7xl flex-col justify-center px-4 py-20 md:px-6 lg:min-h-[640px]">
        <p className="mb-3 font-serif text-sm italic tracking-wide text-gold md:text-base">
          Scientia ad Excellentiam
        </p>
        <h1 className="max-w-3xl font-serif text-4xl font-bold leading-tight text-primary-foreground text-balance md:text-5xl lg:text-6xl">
          Learning rooted in the community, built for the world.
        </h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-primary-foreground/85 md:text-lg text-pretty">
          Colegio De Loreto offers quality, accessible higher education in Loreto, Agusan del Sur —
          preparing graduates who lead with knowledge, character, and service.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild size="lg" className="bg-gold font-semibold text-navy-dark hover:bg-gold-dark">
            <a href="#admissions">
              Start Your Application
              <ArrowRight className="ml-1 h-4 w-4" />
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-primary-foreground/40 bg-transparent font-semibold text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
          >
            <a href="#programs">Explore Programs</a>
          </Button>
        </div>

        {/* Program finder */}
        <form className="mt-12 w-full max-w-3xl rounded-xl border border-primary-foreground/15 bg-background/95 p-4 shadow-xl backdrop-blur md:p-5">
          <label className="mb-3 block text-sm font-bold uppercase tracking-wide text-navy">
            Find the right program for you
          </label>
          <div className="flex flex-col gap-3 sm:flex-row">
            <select
              defaultValue=""
              aria-label="Select a program"
              className="h-11 flex-1 rounded-md border border-input bg-background px-3 text-sm text-foreground outline-none focus:border-gold focus:ring-2 focus:ring-gold/40"
            >
              <option value="" disabled>
                Select a program…
              </option>
              {programs.map((p) => (
                <option key={p.code} value={p.code}>
                  {p.name}
                </option>
              ))}
            </select>
            <Button asChild size="lg" className="h-11 bg-navy font-semibold text-primary-foreground hover:bg-navy-dark">
              <a href="#programs">Find your program</a>
            </Button>
          </div>
        </form>
      </div>
    </section>
  )
}
