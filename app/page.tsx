import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { QuickLinks } from '@/components/quick-links'
import { About } from '@/components/about'
import { Programs } from '@/components/programs'
import { Admissions } from '@/components/admissions'
import { NewsAnnouncements } from '@/components/news-announcements'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <QuickLinks />
        <About />
        <Programs />
        <Admissions />
        <NewsAnnouncements />
      </main>
      <SiteFooter />
    </>
  )
}
