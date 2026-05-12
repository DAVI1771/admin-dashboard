import styles from './Badge.module.css'

export const Badge = ({ 
  children, 
  status = 'default',
  variant = 'default'
}) => {
  return (
    <span className={`${styles.badge} ${styles[status]}`}>
      {children}
    </span>
  )
}
