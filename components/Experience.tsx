import Image from 'next/image'
import { allExperience } from '@/data/experience'
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

export default function Experience() {
  return (
    <section id="experience" className={styles.experience}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Experience</h2>

        <div className={styles.timeline}>
          {allExperience.map((item, index) => (
            <article key={`${item.company}-${index}`} className={styles.card}>
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
          ))}
        </div>
      </div>
    </section>
  )
}
