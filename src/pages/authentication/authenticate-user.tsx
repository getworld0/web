import Head from 'next/head'

import backgroundStyles from '@/styles/starBackground.module.scss'
import styles from './authenticate-user.module.scss'

import BasicAuthenticationForm from '@/authentication/components/basicAuthentication/BasicAuthenticationForm'
import OAuthProviderButton from '@/authentication/components/OAuthProviderButton'

export default function AuthenticateUser () {
  return (
    <div className={backgroundStyles.backgroundContainer}>
      <Head>
        <title>Login | World0</title>
      </Head>
      <div className={backgroundStyles.stars}></div>
      <div className={backgroundStyles.twinkling}></div>
      <div className={styles.authenticateContainer}>
        <BasicAuthenticationForm />
        <div className={styles.verticalLine}></div>
        <div className={styles.loginWithSentry}>
          <OAuthProviderButton />
        </div>
      </div>
    </div>
  )
}
