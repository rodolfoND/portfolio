import { ThemeProvider } from './components/hooks/use-theme'
import { Header } from './components/header'
import { HeroSection } from './components/hero-section'
import { AboutSection } from './components/about-section'
import { SkillsSection } from './components/skills-section'
import { ProjectsSection } from './components/projects-section'
import { ContactSection } from './components/contact-section'
import { Footer } from './components/footer'

export default function App() {
  return (
    <ThemeProvider defaultTheme="light">
      <div className="min-h-screen">
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}