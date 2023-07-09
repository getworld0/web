import { Button } from '../../../common/components/elements/Button/Button'
import styles from './BasicAuthenticationForm.module.scss'
export default function BasicAuthenticationForm () {
  return (
    <div className={styles.formContainer}>
      <form>
        <label className={styles.label}>Email</label>
        <input type="text" id="first" name="first" className={styles.textInput}/>
        <label className={styles.label}>Password</label>
        <input type="text" id="last" name="last" className={styles.textInput}/>
        <Button text="Submit" />
      </form>
    </div>
  )
}
