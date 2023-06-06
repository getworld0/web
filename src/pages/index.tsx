import React from 'react'
import styles from '@/styles/Home.module.scss'
import Head from 'next/head'

export default function Home () {
  return (
    <div className={styles.backgroundContainer}>
      <Head>
        <title>World0</title>
      </Head>
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
