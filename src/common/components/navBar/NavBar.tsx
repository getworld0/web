import styles from '@/common/components/navBar/NavBar.module.scss'
import Link from 'next/link'

import { Button } from '@/common/components/elements/button/Button'

export function NavBar () {
  return (
      <div className={styles.navBar}>
        <Link className={styles.logInLink} href="/">
          Log in
        </Link>

        <Link href="/">
          <Button text="Sign up" />
        </Link>
      </div>
  )
}
