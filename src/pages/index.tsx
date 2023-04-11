import React from 'react'
import styles from '@/styles/Home.module.scss'

export default function Home () {
  return (
    <div className={styles['background-container']}>
      <div className={styles.stars}></div>
      <div className={styles.twinkling}></div>
      <div className={styles.introTextDiv}>
        <span className={styles.introText}>
          Developing enduring solutions to environmental issues through software.
        </span>
      </div>
    </div>
  )
}
