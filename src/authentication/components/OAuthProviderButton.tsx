import Image from 'next/image'

import styles from './OAuthProviderButton.module.scss'

export default function OAuthProviderButton () {
  async function getAuthorizationCode () {
    console.log('hello, world!')
    try {
      const res = await fetch(
        'https://eric-hasegawa.ngrok.io/oauth/authorize/?client_id=955129933f6c4f40b0482aad087ee66f24df7f8555e247588f750b607bf876e9&response_type=code&scope=openid profile email', { redirect: 'follow' })
      if (res.status === 200) {
        window.location.href = res.url
      }
      console.log('res: ', res.url)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    <button className={styles.button} onClick={getAuthorizationCode}>
      <Image src="/sentryLogo.svg" height={34} width={34} alt="Sentry Logo"/>
      <span>Login with Sentry</span>
   </button>)
}
