import styles from '@/common/components/navBar/NavBar.module.scss'
import Link from 'next/link'

import { Button } from '@/common/components/elements/button/Button'

export function NavBar () {
  return (
      <div className={styles.navBar}>
        <Link className={styles.homeLink} href="/">
          <span className={styles.linkText}>Home</span>
        </Link>
        <Link className={styles.loginLink} href="/auth/login">
        <span className={styles.linkText}>Log in</span>
        </Link>

        <Link href="/">
          <Button text="Sign up" />
        </Link>
      </div>
  )
}
