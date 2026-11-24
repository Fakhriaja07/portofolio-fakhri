import ContactSection from './components/ContactSection'
import EducationSection from './components/EducationSection'
import ExperienceSection from './components/ExperienceSection'
import Hero from './components/Hero'
import KMeansDemoSection from './components/KMeansDemoSection'
import ProfileSection from './components/ProfileSection'
import ProjectSection from './components/ProjectSection'
import SiteHeader from './components/SiteHeader'
import SkillsSection from './components/SkillsSection'
import TrainingSection from './components/TrainingSection'

// Urutan section sesuai preview: Tentang → Pendidikan & Publikasi →
// Pengalaman → Proyek → Demo K-Means → Pelatihan → Keahlian → Kontak.
export default function App() {
  return (
    <div className="min-h-screen bg-background font-sans text-ink">
      <SiteHeader />
      <main>
        <Hero />
        <ProfileSection />
        <EducationSection />
        <ExperienceSection />
        <ProjectSection />
        <KMeansDemoSection />
        <TrainingSection />
        <SkillsSection />
        <ContactSection />
      </main>
    </div>
  )
}
