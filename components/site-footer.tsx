import Image from 'next/image'
import { MapPin, Phone, Mail, Globe, ArrowRight } from 'lucide-react'
import { programs, navLinks } from '@/lib/site-data'

export function SiteFooter() {
  return (
    <footer id="contact" className="bg-navy-dark text-primary-foreground">
      {/* Contact strip */}
      <div className="border-b border-primary-foreground/10">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-10 sm:grid-cols-3 md:px-6">
          <div className="flex items-start gap-3">
            <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
            <div>
              <p className="text-sm font-bold">Visit Us</p>
              <p className="text-sm text-primary-foreground/75">Loreto, Agusan del Sur, Philippines</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Phone className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
            <div>
              <p className="text-sm font-bold">Call Us</p>
              <p className="text-sm text-primary-foreground/75">(085) 000-0000</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Mail className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
            <div>
              <p className="text-sm font-bold">Email Us</p>
              <p className="text-sm text-primary-foreground/75">info@colegiodeloreto.edu.ph</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-2 md:px-6 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <div className="flex items-center gap-3">
            <Image
              src="/images/cdl-logo.jpg"
              alt="Colegio De Loreto seal"
              width={56}
              height={56}
              className="h-14 w-14 object-contain"
            />
            <div>
              <p className="font-serif text-lg font-bold">Colegio De Loreto</p>
              <p className="text-xs text-primary-foreground/70">Scientia ad Excellentiam</p>
            </div>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-primary-foreground/70">
            A higher education institution committed to knowledge, character, and service in Loreto,
            Agusan del Sur.
          </p>
          <a
            href="#"
            aria-label="Official Facebook page"
            className="mt-5 inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary-foreground/10 text-gold transition-colors hover:bg-gold hover:text-navy-dark"
          >
            <Globe className="h-4 w-4" />
          </a>
        </div>

        <div>
          <h3 className="font-serif text-sm font-bold uppercase tracking-wide text-gold">Programs</h3>
          <ul className="mt-4 space-y-2.5">
            {programs.map((p) => (
              <li key={p.code}>
                <a
                  href="#programs"
                  className="text-sm text-primary-foreground/75 transition-colors hover:text-gold"
                >
                  {p.short}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-serif text-sm font-bold uppercase tracking-wide text-gold">Explore</h3>
          <ul className="mt-4 space-y-2.5">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm text-primary-foreground/75 transition-colors hover:text-gold"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-serif text-sm font-bold uppercase tracking-wide text-gold">Stay Updated</h3>
          <p className="mt-4 text-sm text-primary-foreground/75">
            Get admissions news and important announcements in your inbox.
          </p>
          <form className="mt-4 flex flex-col gap-2">
            <input
              type="email"
              required
              placeholder="Your email address"
              aria-label="Email address"
              className="h-10 rounded-md border border-primary-foreground/20 bg-primary-foreground/5 px-3 text-sm text-primary-foreground placeholder:text-primary-foreground/50 outline-none focus:border-gold focus:ring-2 focus:ring-gold/40"
            />
            <button
              type="submit"
              className="inline-flex h-10 items-center justify-center gap-1 rounded-md bg-gold text-sm font-bold text-navy-dark transition-colors hover:bg-gold-dark"
            >
              Subscribe
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-6 text-xs text-primary-foreground/60 md:flex-row md:px-6">
          <p>© {new Date().getFullYear()} Colegio De Loreto, Loreto, Agusan del Sur. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="transition-colors hover:text-gold">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-gold">
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
