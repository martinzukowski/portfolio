'use client'

import { useRef, useEffect } from 'react'
import styles from './Skills.module.css'

const frontEndSkills = [
  'React',
  'Next.js',
  'JavaScript',
  'TypeScript',
  'HTML/CSS',
  'Tailwind',
  'ThreeJS',
  'Bootstrap',
]

const backEndSkills = [
  'Python',
  'Go',
  'C/C++',
  'Node.js',
  'Express',
  'Springboot',
  'REST API',
  'Assembly',
]

const databaseTools = [
  'MongoDB',
  'SQL',
  'Git',
  'Docker',
  'AWS',
  'Vercel',
  'Render',
  'Figma',
  'LaTeX',
  'OpenAI API',
  'Finnhub API',
]

export default function Skills() {
  const timelineRef = useRef<HTMLDivElement>(null)
  const categoriesRef = useRef<(HTMLDivElement | null)[]>([])
  const dotsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const updateDotPositions = () => {
      if (!timelineRef.current) return

      categoriesRef.current.forEach((category, index) => {
        const dot = dotsRef.current[index]
        if (category && dot && timelineRef.current) {
          const categoryRect = category.getBoundingClientRect()
          const timelineRect = timelineRef.current.getBoundingClientRect()
          const offsetTop = categoryRect.top - timelineRect.top + categoryRect.height / 2
          dot.style.top = `${offsetTop}px`
        }
      })
    }

    updateDotPositions()
    window.addEventListener('resize', updateDotPositions)
    return () => window.removeEventListener('resize', updateDotPositions)
  }, [])

  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Skills</h2>
        <div className={styles.skillsWrapper}>
          <div className={styles.timeline} ref={timelineRef}>
            <div className={styles.timelineLine}></div>
            <div
              ref={(el) => { dotsRef.current[0] = el }}
              className={styles.timelineDot}
            ></div>
            <div
              ref={(el) => { dotsRef.current[1] = el }}
              className={styles.timelineDot}
            ></div>
            <div
              ref={(el) => { dotsRef.current[2] = el }}
              className={styles.timelineDot}
            ></div>
          </div>
          <div className={styles.skillsContainer}>
            <div
              ref={(el) => { categoriesRef.current[0] = el }}
              className={styles.skillCategory}
            >
              <h3 className={styles.categoryTitle}>Front End</h3>
              <div className={styles.skillCells}>
                {frontEndSkills.map((skill, index) => (
                  <div key={index} className={styles.skillCell}>
                    {skill}
                  </div>
                ))}
              </div>
            </div>
            <div
              ref={(el) => { categoriesRef.current[1] = el }}
              className={styles.skillCategory}
            >
              <h3 className={styles.categoryTitle}>Back End</h3>
              <div className={styles.skillCells}>
                {backEndSkills.map((skill, index) => (
                  <div key={index} className={styles.skillCell}>
                    {skill}
                  </div>
                ))}
              </div>
            </div>
            <div
              ref={(el) => { categoriesRef.current[2] = el }}
              className={styles.skillCategory}
            >
              <h3 className={styles.categoryTitle}>Database & Tools</h3>
              <div className={styles.skillCells}>
                {databaseTools.map((skill, index) => (
                  <div key={index} className={styles.skillCell}>
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
