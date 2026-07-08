'use client'

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import Image from 'next/image'
import {
  allProjects,
  projectCategories,
  type ProjectCategory,
  type ProjectItem,
} from '@/data/projects'
import styles from './Projects.module.css'

type FilterId = 'all' | ProjectCategory

interface ProjectCardProps extends ProjectItem {}

function ProjectCard({ title, description, tech, link, github, date, image }: ProjectCardProps) {
  return (
    <div className={styles.projectCard}>
      <div className={styles.projectImage}>
        {image ? (
          <Image
            src={image}
            alt={title}
            width={400}
            height={200}
            className={styles.projectImg}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
          />
        ) : (
          <div className={styles.imagePlaceholder}>
            <svg
              width="100%"
              height="200"
              viewBox="0 0 400 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="400" height="200" fill="#f3f4f6" />
              <rect x="50" y="50" width="300" height="100" fill="#d1d5db" rx="8" />
              <text
                x="200"
                y="115"
                textAnchor="middle"
                fill="#9ca3af"
                fontSize="16"
                fontFamily="system-ui, sans-serif"
              >
                {title}
              </text>
            </svg>
          </div>
        )}
      </div>
      <div className={styles.projectContent}>
        <div className={styles.projectHeader}>
          <h3 className={styles.projectTitle}>{title}</h3>
          {date && <span className={styles.projectDate}>{date}</span>}
        </div>
        <p className={styles.projectDescription}>{description}</p>
        {tech.length > 0 && (
          <div className={styles.projectTech}>
            {tech.map((techItem) => (
              <span key={techItem} className={styles.techTag}>
                {techItem}
              </span>
            ))}
          </div>
        )}
        <div className={styles.projectLinks}>
          {link && (
            <a
              href={link}
              className={styles.projectLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo →
            </a>
          )}
          {github && (
            <a
              href={github}
              className={styles.projectLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub →
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<FilterId>('all')
  const [activeIndex, setActiveIndex] = useState(0)
  const touchStartX = useRef<number | null>(null)

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') return allProjects
    return allProjects.filter((project) => project.categories.includes(activeFilter))
  }, [activeFilter])

  const total = filteredProjects.length
  const currentProject = filteredProjects[activeIndex]

  const goTo = useCallback(
    (index: number) => {
      if (total === 0) return
      setActiveIndex(((index % total) + total) % total)
    },
    [total],
  )

  const goPrev = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo])
  const goNext = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo])

  const handleTouchStart = (event: React.TouchEvent) => {
    touchStartX.current = event.touches[0].clientX
  }

  const handleTouchEnd = (event: React.TouchEvent) => {
    if (touchStartX.current === null) return

    const deltaX = event.changedTouches[0].clientX - touchStartX.current
    const swipeThreshold = 50

    if (deltaX > swipeThreshold) goPrev()
    else if (deltaX < -swipeThreshold) goNext()

    touchStartX.current = null
  }

  useEffect(() => {
    setActiveIndex(0)
  }, [activeFilter])

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') goPrev()
      if (event.key === 'ArrowRight') goNext()
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [goPrev, goNext])

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Projects</h2>

        <div className={styles.filters} role="tablist" aria-label="Filter projects by category">
          {projectCategories.map((category) => (
            <button
              key={category.id}
              type="button"
              role="tab"
              aria-selected={activeFilter === category.id}
              className={`${styles.filterBtn} ${
                activeFilter === category.id ? styles.filterBtnActive : ''
              }`}
              onClick={() => setActiveFilter(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>

        {total === 0 ? (
          <p className={styles.emptyState}>No projects in this category yet.</p>
        ) : (
          <div className={styles.carousel}>
            <button
              type="button"
              className={styles.carouselBtn}
              onClick={goPrev}
              aria-label="Previous project"
            >
              ‹
            </button>

            <div
              className={styles.carouselViewport}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <div
                className={styles.carouselTrack}
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {filteredProjects.map((project) => (
                  <div key={project.title} className={styles.carouselSlide}>
                    <ProjectCard {...project} />
                  </div>
                ))}
              </div>
            </div>

            <button
              type="button"
              className={styles.carouselBtn}
              onClick={goNext}
              aria-label="Next project"
            >
              ›
            </button>
          </div>
        )}

        {total > 0 && (
          <div className={styles.carouselFooter}>
            <div className={styles.mobileNav}>
              <button
                type="button"
                className={styles.carouselBtn}
                onClick={goPrev}
                aria-label="Previous project"
              >
                ‹
              </button>
              <button
                type="button"
                className={styles.carouselBtn}
                onClick={goNext}
                aria-label="Next project"
              >
                ›
              </button>
            </div>
            <p className={styles.carouselCounter}>
              {activeIndex + 1} of {total}
              {currentProject ? ` — ${currentProject.title}` : ''}
            </p>
            <div
              className={styles.progressBar}
              role="progressbar"
              aria-valuenow={activeIndex + 1}
              aria-valuemin={1}
              aria-valuemax={total}
              aria-label="Project carousel progress"
            >
              <div
                className={styles.progressFill}
                style={{ width: `${((activeIndex + 1) / total) * 100}%` }}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
