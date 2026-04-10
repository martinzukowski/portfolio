import { SkillsShowcase } from '@/components/ui/skills-showcase'
import styles from './Skills.module.css'

export default function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Skills</h2>
        <div className={styles.showcaseWrap}>
          <SkillsShowcase />
        </div>
      </div>
    </section>
  )
}
