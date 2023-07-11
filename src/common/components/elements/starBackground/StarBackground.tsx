import styles from '@/common/components/elements/starBackground/StarBackground.module.scss'

interface StarBackgroundProps {
  children: any
}

export function StarBackground ({ children }: StarBackgroundProps) {
  return (
    <div className={styles.background}>
      <div className={styles.background_stars}></div>
      <div className={styles.background_twinkling}></div>
      {children}
    </div>
  )
}
