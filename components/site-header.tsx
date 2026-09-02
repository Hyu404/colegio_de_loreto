'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Menu, X, Search, Globe, Mail, Phone } from 'lucide-react'
import { navLinks } from '@/lib/site-data'
import { Button } from '@/components/ui/button'

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50">
      {/* Utility bar */}
      <div className="hidden bg-navy-dark text-primary-foreground md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-xs">
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5">
              <Phone className="h-3.5 w-3.5 text-gold" />
              (085) 000-0000
            </span>
            <span className="flex items-center gap-1.5">
              <Mail className="h-3.5 w-3.5 text-gold" />
              info@colegiodeloreto.edu.ph
            </span>
          </div>
          <div className="flex items-center gap-5">
            <a href="/student-portal" className="transition-colors hover:text-gold">
              Student Portal
            </a>
            <a href="/faculty" className="transition-colors hover:text-gold">
              Faculty
            </a>
            <a href="/admin" className="transition-colors hover:text-gold">
              Registrar Admin
            </a>
            <a href="#" aria-label="Official Facebook page" className="transition-colors hover:text-gold">
              <Globe className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-6">
          <a href="#top" className="flex items-center gap-3">
            <Image
              src="/images/cdl-logo.jpg"
              alt="Colegio De Loreto seal"
              width={56}
              height={56}
              className="h-12 w-12 shrink-0 object-contain md:h-14 md:w-14"
              priority
            />
            <span className="flex flex-col leading-tight">
              <span className="font-serif text-base font-bold text-navy md:text-lg">Colegio De Loreto</span>
              <span className="text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
                Loreto, Agusan del Sur
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-2 text-sm font-semibold text-foreground/80 transition-colors hover:bg-accent hover:text-navy"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              aria-label="Search"
              className="hidden rounded-md p-2 text-navy transition-colors hover:bg-accent sm:inline-flex"
            >
              <Search className="h-5 w-5" />
            </button>
            <Button
              asChild
              className="hidden bg-gold font-semibold text-navy-dark hover:bg-gold-dark sm:inline-flex"
            >
              <a href="#admissions">Apply Now</a>
            </Button>
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex rounded-md p-2 text-navy transition-colors hover:bg-accent lg:hidden"
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="border-t border-border bg-background lg:hidden">
            <nav className="mx-auto flex max-w-7xl flex-col px-4 py-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-3 text-sm font-semibold text-foreground/80 transition-colors hover:bg-accent hover:text-navy"
                >
                  {link.label}
                </a>
              ))}
              <Button asChild className="mt-2 mb-3 bg-gold font-semibold text-navy-dark hover:bg-gold-dark">
                <a href="#admissions" onClick={() => setOpen(false)}>
                  Apply Now
                </a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
