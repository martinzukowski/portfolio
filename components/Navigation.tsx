'use client'

import { useState, useEffect } from 'react'
import styles from './Navigation.module.css'

export default function Navigation() {
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById('hero')
      if (hero) {
        const heroBottom = hero.offsetTop + hero.offsetHeight
        setIsSticky(window.scrollY >= heroBottom)
      }
    }
    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check initial position
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className={`${styles.nav} ${isSticky ? styles.sticky : ''}`}>
      <div className={styles.container}>
        <div className={styles.logo} onClick={() => scrollToSection('hero')}>
          Martin Zukowski
        </div>
        <ul className={styles.menu}>
          <li onClick={() => scrollToSection('projects')}>Projects</li>
          <li onClick={() => scrollToSection('skills')}>Skills</li>
          <li onClick={() => scrollToSection('about')}>About</li>
          <li onClick={() => scrollToSection('resume')}>Resume</li>
          <li onClick={() => scrollToSection('contact')}>Contact</li>
        </ul>
      </div>
    </nav>
  )
}

