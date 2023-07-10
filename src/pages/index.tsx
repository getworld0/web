import { NavBar } from '@/common/components/navBar/NavBar'
import styles from '@/styles/Home.module.scss'
import Head from 'next/head'

import { StarBackground } from '@/common/components/elements/starBackground/StarBackground'

export default function Home () {
  return (
    <StarBackground>
      <Head>
        <title>World0</title>
      </Head>
      <NavBar />
      <div className={styles.introTextDiv}>
        <span>
          Developing enduring solutions to environmental issues through software.
        </span>
      </div>
  </StarBackground>
  )
}
