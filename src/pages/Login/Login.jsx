import { useNavigate } from 'react-router-dom'
import styles from './Login.module.css'
import { Button } from '../../components/common'

const Login = () => {
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()
    navigate('/dashboard')
  }

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.logo}>🍕</div>
        <h2 className={styles.title}>Welcome back</h2>
        <p className={styles.subtitle}>Sign in to manage your restaurant</p>
        <form className={styles.form} onSubmit={handleLogin}>
          <input type="email" placeholder="Email" required className={styles.input} />
          <input type="password" placeholder="Password" required className={styles.input} />
          <Button type="submit" variant="primary" fullWidth>Login</Button>
        </form>
      </div>
    </div>
  )
}

export default Login
