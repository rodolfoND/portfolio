import { Header } from '@/components/header'
import { HeroSection } from '@/components/hero-section'
import { AboutSection } from '@/components/about-section'
import { SkillsSection } from '@/components/skills-section'
import { ProjectsSection } from '@/components/projects-section'
import { PodcastsSection } from '@/components/podcasts-section'
import { ContactSection } from '@/components/contact-section'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden w-full">
      <Header />
      <main className="w-full overflow-x-hidden">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <PodcastsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

