import { useEffect } from 'react'
import { useRouter } from 'next/router'

import styles from '@/styles/Home.module.scss'
import backgroundStyles from '@/styles/starBackground.module.scss'
import Head from 'next/head'
import Link from 'next/link'

import { Button } from '@/common/components/elements/Button/Button'

export default function Home () {
  const router = useRouter()
  const { code } = router.query
  console.log('code: ', code)

  useEffect(() => {
    function parseJwt (token: string) {
      const base64Url = token.split('.')[1]
      const base64 = base64Url.replace('-', '+').replace('_', '/')
      return JSON.parse(window.atob(base64))
    }
    async function getUserData () {
      if (code !== undefined) {
        try {
          const codeString: string = (typeof code === 'string') ? code : 'code' // this is for some typescript bs
          const tokenFormData = new FormData()
          tokenFormData.append('client_id', 'CLIENT ID')
          tokenFormData.append('redirect_uri', 'http://localhost:3000/')
          tokenFormData.append('code', codeString)
          tokenFormData.append('grant_type', 'authorization_code')
          const res = await fetch(
            'https://eric-hasegawa.ngrok.io/oauth/token/',
            {
              method: 'POST',
              body: tokenFormData
            })
          const jsonResponse = await res.json()
          console.log('jsonResponse: ', jsonResponse)
          const parsedToken = parseJwt(jsonResponse?.id_token)
          console.log('PARSED TOKEN: ', parsedToken)
        } catch (err) {
          console.log(err)
        }
      }
    }
    void getUserData()
  }, [code])
  return (
    <div className={backgroundStyles.backgroundContainer}>
      <Head>
        <title>World0</title>
      </Head>
      <div className={backgroundStyles.stars}></div>
      <div className={backgroundStyles.twinkling}></div>
      <div className={styles.navBar}>
        <Link className={styles.logInLink} href="/authentication/authenticate-user">
          Log in
        </Link>

        <Link href="/authentication/authenticate-user">
          <Button text="Sign up" />
        </Link>
      </div>
      <div className={styles.introTextDiv}>
        <span>
          Developing enduring solutions to environmental issues through software.
        </span>
      </div>
    </div>
  )
}
