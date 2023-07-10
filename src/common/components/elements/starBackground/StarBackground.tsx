import styles from '@/common/components/elements/starBackground/StarBackground.module.scss'

interface StarBackgroundProps {
  children: any
}

export function StarBackground ({ children }: StarBackgroundProps) {
  return (
    <div className={styles.backgroundContainer}>
      <div className={styles.stars}></div>
      <div className={styles.twinkling}></div>
      {children}
    </div>
  )
}
