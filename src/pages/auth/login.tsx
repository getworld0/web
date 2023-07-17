import { NavBar } from '@/common/components/navBar/NavBar'
import { SpinningGlobeGif } from '@/common/components/elements/spinningGlobeGif/SpinningGlobeGif'
import { Button } from '@/common/components/elements/button/Button'
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
          <h2>Enter World0</h2>
          <div>
            <form>
              <label>Email</label>
              <input type="text"name="first"/>
              <label>Password</label>
              <input type="text" name="last"/>
              <Button text="Submit" />
            </form>
          </div>
        </div>
      </div>

      <div className={styles.verticalLine} />

      <div className={styles.marketingTextContainer}>
        <h1>Support a climate-first future with World0.</h1>
        <div className={styles.marketingTextContainer_bodyTextContainer}>
          <h3>
            We&apos;ll put some cool marketing text <br /> around here at some point.
            <br /> It will say nice things <br /> about us.
          </h3>
            <h3>
              Right now we literally <br />
              do nothing, so I&apos;m not sure what <br />
              marketing would look like for that? Maybe <br />
              I can add a haiku later or put a joke in here to lighten up our dark theme.
            </h3>
        </div>
        <div className={styles.marketingTextContainer_spinningGlobeGif}>
          <SpinningGlobeGif />
        </div>
      </div>

  </StarBackground>
  )
}
