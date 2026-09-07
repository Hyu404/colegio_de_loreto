import { ClipboardList, Send, UserCheck, PartyPopper } from 'lucide-react'
import { Button } from '@/components/ui/button'

const steps = [
  { icon: ClipboardList, title: 'Prepare Requirements', desc: 'Form 138, PSA birth certificate, good moral certificate, and 2×2 photos.' },
  { icon: Send, title: 'Submit Application', desc: 'Complete the online or on-campus application form and submit your documents.' },
  { icon: UserCheck, title: 'Assessment & Interview', desc: 'Take the admission assessment and meet with our program advisers.' },
  { icon: PartyPopper, title: 'Enroll & Begin', desc: 'Finalize your enrollment, settle fees, and start your journey at CDL.' },
]

export function Admissions() {
  return (
    <section id="admissions" className="relative overflow-hidden bg-navy py-20 text-primary-foreground">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 20%, oklch(0.79 0.14 84) 0, transparent 40%), radial-gradient(circle at 80% 80%, oklch(0.79 0.14 84) 0, transparent 40%)',
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="mb-3 inline-block rounded-full bg-gold px-3 py-1 text-xs font-bold uppercase tracking-wide text-navy-dark">
            Admissions
          </span>
          <h2 className="font-serif text-3xl font-bold text-balance md:text-4xl">
            Your journey starts in four steps
          </h2>
          <p className="mt-4 leading-relaxed text-primary-foreground/80 text-pretty">
            Enrollment for A.Y. 2026–2027 is now open. Follow the steps below to become part of the CDL
            community.
          </p>
        </div>

        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li
              key={s.title}
              className="relative rounded-xl border border-primary-foreground/15 bg-primary-foreground/5 p-6"
            >
              <span className="absolute right-5 top-5 font-serif text-4xl font-bold text-primary-foreground/10">
                {i + 1}
              </span>
              <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-gold text-navy-dark">
                <s.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-4 font-serif text-lg font-bold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-primary-foreground/75">{s.desc}</p>
            </li>
          ))}
        </ol>

        <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild size="lg" className="bg-gold font-semibold text-navy-dark hover:bg-gold-dark">
            <a href="#contact">Apply for A.Y. 2026–2027</a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-primary-foreground/40 bg-transparent font-semibold text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
          >
            <a href="#contact">Request Information</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
