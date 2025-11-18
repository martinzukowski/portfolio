import styles from './Contact.module.css'
import { config } from '@/config'

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Get In Touch</h2>
        <p className={styles.subtitle}>
          I'm always open to discussing new projects, creative ideas, or
          opportunities to be part of your visions.
        </p>
        <div className={styles.contactContent}>
          <div className={styles.contactInfo}>
            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div>
                <h3>Email</h3>
                <a href={`mailto:${config.personal.email}`}>{config.personal.email}</a>
              </div>
            </div>
            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div>
                <h3>Phone</h3>
                <a href={`tel:${config.personal.phone.replace(/\s/g, '')}`}>{config.personal.phone}</a>
              </div>
            </div>
            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <h3>Location</h3>
                <p>{config.personal.location}</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.socialLinks}>
          <a
            href={config.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            GitHub
          </a>
          <a
            href={config.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}

