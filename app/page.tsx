import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import ServicesPage from './services/page'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <ServicesPage/>
      <Contact />
    </main>
  )
} 