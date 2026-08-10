import { GraduationCap, FileText, CalendarDays, HandCoins } from 'lucide-react'

const links = [
  { icon: GraduationCap, label: 'Admissions', desc: 'How to enroll', href: '#admissions' },
  { icon: FileText, label: 'Requirements', desc: 'What to prepare', href: '#admissions' },
  { icon: HandCoins, label: 'Scholarships', desc: 'Financial aid', href: '#admissions' },
  { icon: CalendarDays, label: 'Academic Calendar', desc: 'Key dates', href: '#announcements' },
]

export function QuickLinks() {
  return (
    <section className="relative z-10 -mt-8 px-4 md:px-6">
      <div className="mx-auto grid max-w-7xl grid-cols-2 overflow-hidden rounded-xl border border-border bg-card shadow-lg lg:grid-cols-4">
        {links.map((item, i) => (
          <a
            key={item.label}
            href={item.href}
            className={`group flex items-center gap-4 p-5 transition-colors hover:bg-accent ${
              i < 2 ? 'border-b border-border' : ''
            } ${i % 2 === 0 ? 'border-r border-border' : ''} lg:border-b-0 lg:[&:not(:last-child)]:border-r`}
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-navy text-gold transition-colors group-hover:bg-navy-dark">
              <item.icon className="h-5 w-5" />
            </span>
            <span className="flex flex-col">
              <span className="text-sm font-bold text-navy">{item.label}</span>
              <span className="text-xs text-muted-foreground">{item.desc}</span>
            </span>
          </a>
        ))}
      </div>
    </section>
  )
}
