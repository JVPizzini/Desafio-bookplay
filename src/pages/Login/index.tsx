import styles from './styles.module.scss'

export default function Login() {
  return (
    <div className={styles.main}>
      <form >
        <div className={styles.context}>
          <input type="text" placeholder="Login"/>
          <input type="text" placeholder="Password"/>
            <button>Sing In</button>
            
          <a href="">Need an account?</a>
          <div>
          </div>

        </div>
      </form>
    </div>
  )
}