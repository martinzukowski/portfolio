import styles from './About.module.css'

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>About Me</h2>
        <div className={styles.content}>
          <div className={styles.text}>
            <p>
              I'm a Computer Science student at Simon Fraser University (SFU) with a passion for 
              building innovative full-stack applications and exploring the depths of machine learning 
              and systems programming.
            </p>
            <p>
              When I'm not coding, I participate in competitive programming sessions, practice algorithms 
              on LeetCode, and work on projects that solve real-world problems. I also enjoy staying active 
              by hiking in the beautiful trails around British Columbia and playing volleyball. I believe in writing 
              clean, maintainable code and building products that make a meaningful impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

