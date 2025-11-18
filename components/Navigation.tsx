'use client'

import { useState, useEffect } from 'react'
import styles from './Navigation.module.css'

export default function Navigation() {
  const [isSticky, setIsSticky] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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

  useEffect(() => {
    // Close menu when clicking outside on mobile
    const handleClickOutside = (event: MouseEvent) => {
      if (isMenuOpen && window.innerWidth <= 768) {
        const target = event.target as HTMLElement
        const menu = target.closest(`.${styles.menu}`)
        const burger = target.closest(`.${styles.burger}`)
        // Close if clicking outside both menu and burger button
        if (!menu && !burger) {
          setIsMenuOpen(false)
        }
      }
    }

    if (isMenuOpen) {
      // Small delay to avoid immediate closure when opening
      setTimeout(() => {
        document.addEventListener('click', handleClickOutside)
      }, 100)
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.removeEventListener('click', handleClickOutside)
      document.body.style.overflow = ''
    }
  }, [isMenuOpen, styles.menu, styles.burger])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false) // Close menu on mobile after clicking
    }
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className={`${styles.nav} ${isSticky ? styles.sticky : ''}`}>
      <div className={styles.container}>
        <div className={styles.logo} onClick={() => scrollToSection('hero')}>
          Martin Zukowski
        </div>
        <button 
          className={styles.burger}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={`${styles.burgerLine} ${isMenuOpen ? styles.open : ''}`}></span>
          <span className={`${styles.burgerLine} ${isMenuOpen ? styles.open : ''}`}></span>
          <span className={`${styles.burgerLine} ${isMenuOpen ? styles.open : ''}`}></span>
        </button>
        <ul className={`${styles.menu} ${isMenuOpen ? styles.menuOpen : ''}`}>
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

