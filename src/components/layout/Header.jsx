import styles from './Header.module.css'

export const Header = ({ title, subtitle }) => {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <h1 className={styles.title}>{title}</h1>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </div>
      <div className={styles.userMenu}>
        <span className={styles.userName}>Admin</span>
      </div>
    </header>
  )
}
