import styles from './Resume.module.css'

export default function Resume() {
  return (
    <section id="resume" className={styles.resume}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Resume</h2>
        <p className={styles.subtitle}>
          Download my resume to learn more about my experience and skills.
        </p>
        <div className={styles.resumeButton}>
          <a
            href="/resume.pdf"
            download="Resume2025.pdf"
            className={styles.downloadBtn}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download Resume
          </a>
        </div>
      </div>
    </section>
  )
}

