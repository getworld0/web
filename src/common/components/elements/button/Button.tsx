import styles from '@/common/components/elements/button/Button.module.scss'

interface ButtonProps {
  text: string
  priority?: string
}

export function Button ({ text, priority = 'medium' }: ButtonProps) {
  return <button className={styles.btn}>{text}</button>
}
