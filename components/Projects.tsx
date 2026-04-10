'use client'

import { useState } from 'react'
import Image from 'next/image'
import { allProjects } from '@/data/projects'
import styles from './Projects.module.css'

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

export default function Projects() {
  const [displayCount, setDisplayCount] = useState(4)
  const visibleProjects = allProjects.slice(0, displayCount)
  const hasMore = displayCount < allProjects.length
  const showLess = displayCount > 4

  const handleShowMore = () => {
    setDisplayCount(allProjects.length)
  }

  const handleShowLess = () => {
    setDisplayCount(4)
  }

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Projects</h2>
        
        <div className={styles.projectsGrid}>
          {visibleProjects.map((project, index) => (
            <ProjectCard key={`project-${index}`} {...project} />
          ))}
        </div>

        {hasMore && (
          <div className={styles.showMoreContainer}>
            <button onClick={handleShowMore} className={styles.showMoreBtn}>
              Show More
            </button>
          </div>
        )}

        {showLess && (
          <div className={styles.showMoreContainer}>
            <button onClick={handleShowLess} className={styles.showMoreBtn}>
              Show Less
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
