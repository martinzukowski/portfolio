'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { allExperience } from '@/data/experience'
import type { ExperienceItem } from '@/data/experience'
import styles from './Experience.module.css'

function CompanyLogo({
  logo,
  company,
  companyUrl,
}: {
  logo: string
  company: string
  companyUrl?: string | null
}) {
  const image = (
    <Image
      src={logo}
      alt={`${company} logo`}
      width={32}
      height={32}
      className={styles.logo}
    />
  )

  if (companyUrl) {
    return (
      <a
        href={companyUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.logoLink}
        aria-label={`${company} website`}
      >
        {image}
      </a>
    )
  }

  return image
}

function ExperienceCard({ item, index }: { item: ExperienceItem; index: number }) {
  const cardRef = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const card = cardRef.current
    if (!card) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
    )

    observer.observe(card)
    return () => observer.disconnect()
  }, [])

  return (
    <article
      ref={cardRef}
      className={`${styles.card} ${visible ? styles.cardVisible : ''}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className={styles.companyRow}>
        {item.logo && (
          <CompanyLogo
            logo={item.logo}
            company={item.company}
            companyUrl={item.companyUrl}
          />
        )}
        {item.companyUrl ? (
          <a
            href={item.companyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.companyLink}
          >
            {item.company}
          </a>
        ) : (
          <span className={styles.company}>{item.company}</span>
        )}
      </div>

      <h3 className={styles.role}>{item.role}</h3>

      <div className={styles.description}>
        {item.highlights.map((highlight, highlightIndex) => (
          <p key={highlightIndex}>{highlight}</p>
        ))}
      </div>

      {item.tech && item.tech.length > 0 && (
        <div className={styles.tags}>
          {item.tech.map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
      )}

      <p className={styles.meta}>
        {item.date}
        <span className={styles.metaDivider}>·</span>
        {item.location}
      </p>
    </article>
  )
}

export default function Experience() {
  return (
    <section id="experience" className={styles.experience}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Experience</h2>

        <div className={styles.timeline}>
          {allExperience.map((item, index) => (
            <ExperienceCard key={`${item.company}-${index}`} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
