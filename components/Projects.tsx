'use client'

import { useLayoutEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { allProjects } from '@/data/projects'
import styles from './Projects.module.css'

const MIN_COL_WIDTH = 300
const GRID_GAP = 32

interface ProjectCardProps {
  title: string
  description: string
  tech: string[]
  link: string | null
  github: string | null
  date?: string | null
  image?: string | null
}

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
            {tech.map((techItem, techIndex) => (
              <span key={techIndex} className={styles.techTag}>
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

function getColumnCount(width: number) {
  return Math.max(1, Math.floor((width + GRID_GAP) / (MIN_COL_WIDTH + GRID_GAP)))
}

export default function Projects() {
  const gridRef = useRef<HTMLDivElement>(null)
  const [columns, setColumns] = useState(1)
  const [expanded, setExpanded] = useState(false)

  useLayoutEffect(() => {
    const grid = gridRef.current
    if (!grid) return

    const updateColumns = () => {
      setColumns(getColumnCount(grid.clientWidth))
    }

    updateColumns()

    const observer = new ResizeObserver(updateColumns)
    observer.observe(grid)

    return () => observer.disconnect()
  }, [])

  const defaultCount = columns * 2
  const visibleProjects = expanded
    ? allProjects
    : allProjects.slice(0, defaultCount)
  const hasMore = !expanded && allProjects.length > defaultCount

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Projects</h2>

        <div ref={gridRef} className={styles.projectsGrid}>
          {visibleProjects.map((project, index) => (
            <ProjectCard key={`project-${index}`} {...project} />
          ))}
        </div>

        {hasMore && (
          <div className={styles.showMoreContainer}>
            <button onClick={() => setExpanded(true)} className={styles.showMoreBtn}>
              Show More
            </button>
          </div>
        )}

        {expanded && allProjects.length > defaultCount && (
          <div className={styles.showMoreContainer}>
            <button onClick={() => setExpanded(false)} className={styles.showMoreBtn}>
              Show Less
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
