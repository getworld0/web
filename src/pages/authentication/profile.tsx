import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import styles from './profile.module.scss'
import backgroundStyles from '@/styles/starBackground.module.scss'
import Head from 'next/head'

export default function Home () {
  const router = useRouter()
  const { code } = router.query
  const [email, setEmail] = useState('')
  const [sub, setSub] = useState(0)
  const [iss, setIss] = useState('')

  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])

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
          tokenFormData.append('client_id', '955129933f6c4f40b0482aad087ee66f24df7f8555e247588f750b607bf876e9')
          tokenFormData.append('redirect_uri', 'http://localhost:3000/authentication/profile')
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
          setEmail(jsonResponse.user.email)
          setSub(parsedToken.sub)
          setIss(parsedToken.iss)
        } catch (err) {
          console.log(err)
        }
      }
    }
    void getUserData()
  }, [code])
  return mounted && (
    <div className={backgroundStyles.backgroundContainer}>
      <Head>
        <title>World0 | Profile</title>
      </Head>
      <div className={backgroundStyles.stars}></div>
      <div className={backgroundStyles.twinkling}></div>
      <div className={styles.profileInfoContainer}>
        <h3 className={styles.profileInfoHeader}>Profile information</h3>
        <table className={styles.profileInfoTable}>
          <tr>
            <td>Email</td>
            <td>{email}</td>
          </tr>
          <tr>
            <td>Unique user ID</td>
            <td>{sub}</td>
          </tr>
          <tr>
            <td>Authenticated by</td>
            <td>{iss}</td>
          </tr>
        </table>
        <p className={styles.introText}> You are authenticated! Go and do some stuff that requires you to be logged in :) </p>
      </div>

    </div>
  )
}
