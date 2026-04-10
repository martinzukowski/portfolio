import { Brain, Cloud, Database, RefreshCw } from 'lucide-react'
import styles from './About.module.css'

const focusAreas = [
  {
    title: 'Cloud Infrastructure',
    description:
      'Designing and deploying services on cloud platforms, using containers for portable workloads, and focusing on scalability, observability, and reliable delivery across distributed systems.',
    icon: Cloud,
    iconClass: styles.iconCloud,
  },
  {
    title: 'Machine Learning Engineering',
    description:
      'Training models from scratch in Python—neural networks, reinforcement learning, and classical ML—with NumPy and autograd, plus coursework in computer vision and signal processing.',
    icon: Brain,
    iconClass: styles.iconBrain,
  },
  {
    title: 'MLOps & Deployment',
    description:
      'Shipping ML-adjacent apps end-to-end: REST APIs, CI-friendly deploys, monitoring live data pipelines, and iterating on latency and reliability for production-style demos.',
    icon: RefreshCw,
    iconClass: styles.iconOps,
  },
  {
    title: 'Data Engineering',
    description:
      'Working with SQL and MongoDB, integrating external APIs (e.g. market and LLM APIs), and structuring data for features, training sets, and application backends.',
    icon: Database,
    iconClass: styles.iconData,
  },
] as const

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>About Me</h2>

        <div className={styles.content}>
          <div className={styles.text}>
            <p>
              I&apos;m a Computer Science student at Simon Fraser University (SFU) with a passion for
              building innovative full-stack applications and exploring the depths of machine learning
              and systems programming.
            </p>
            <p>
              When I&apos;m not coding, I participate in competitive programming sessions, practice algorithms
              on LeetCode, and work on projects that solve real-world problems. I also enjoy staying active
              by hiking in the beautiful trails around British Columbia and playing volleyball. I believe in
              writing clean, maintainable code and building products that make a meaningful impact.
            </p>
          </div>

          <div className={styles.rightColumn}>
            <div className={styles.cardsGrid}>
              {focusAreas.map(({ title, description, icon: Icon, iconClass }) => (
                <div key={title} className={styles.card}>
                  <div className={`${styles.iconWrap} ${iconClass}`}>
                    <Icon strokeWidth={1.75} aria-hidden />
                  </div>
                  <h4 className={styles.cardTitle}>{title}</h4>
                  <p className={styles.cardDesc}>{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
