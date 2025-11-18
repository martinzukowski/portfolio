import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Resume from '@/components/Resume'
import Contact from '@/components/Contact'
import Navigation from '@/components/Navigation'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <Navigation />
      <Projects />
      <Skills />
      <About />
      <Resume />
      <Contact />
    </main>
  )
}

