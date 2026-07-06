import { Navbar } from '@/components/navbar'
import { HomeSection } from '@/components/home-section'
import { ProjectsSection } from '@/components/projects-section'
import { BlogSection } from '@/components/blog-section'
import { ContactSection } from '@/components/contact-section'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <div className="min-h-screen scroll-smooth">
      <Navbar />
      <main>
        <HomeSection />
        <ProjectsSection />
        <BlogSection />        
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  )
}
