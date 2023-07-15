import { NavBar } from '@/common/components/navBar/NavBar'
import { SpinningGlobeGif } from '@/common/components/elements/spinningGlobeGif/SpinningGlobeGif'
import styles from '@/styles/Login.module.scss'
import Head from 'next/head'

import { StarBackground } from '@/common/components/elements/starBackground/StarBackground'

export default function Login () {
  return (
    <StarBackground>
      <Head>
        <title>World0 | Login</title>
      </Head>
      <NavBar />
      <div className={styles.loginAreaContainer}>
      <div className={styles.loginAreaContainer_formContainer}>
      </div>
      </div>
      <div className={styles.verticalLine} />
      <div className={styles.marketingTextContainer}>
        <h1>Support a climate-first future with World0. </h1>
        <div className={styles.marketingTextContainer_bodyTextContainer}>
          <h3 className={styles.marketingTextContainer_bodyTextContainer__topText}>
            We&apos;ll put some cool marketing text <br /> around here at some point.
            <br /> It will say nice things <br /> about us.</h3>
        </div>
        <div className={styles.marketingTextContainer_spinningGlobeGif}>
          <SpinningGlobeGif />
        </div>
      </div>

  </StarBackground>
  )
}
