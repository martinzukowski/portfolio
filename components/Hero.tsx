import Image from 'next/image'
import styles from './Hero.module.css'
import { config } from '@/config'
import StarBackground from './StarBackground'

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <StarBackground />
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Hi, I'm <span className={styles.highlight}>{config.personal.name}</span>
          </h1>
          <p className={styles.subtitle}>
            {config.personal.title}
          </p>
          <p className={styles.description}>
            I build beautiful, functional, and user-centered digital experiences.
            Welcome to my corner of the internet.
          </p>
          <div className={styles.buttons}>
            <a href="#projects" className={styles.primaryBtn}>
              View My Work
            </a>
            <a href="/resume.pdf" download className={styles.secondaryBtn}>
              Download Resume
            </a>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <div className={styles.profileImage}>
            <Image
              src="/project-images/IMG_6195.jpg"
              alt={config.personal.name}
              width={300}
              height={300}
              className={styles.profileImg}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

