import { Sidebar } from './Sidebar'
import { Header } from './Header'
import styles from './Layout.module.css'

export const Layout = ({ title, subtitle, children }) => {
  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.mainContent}>
        <Header title={title} subtitle={subtitle} />
        <main className={styles.content}>
          {children}
        </main>
      </div>
    </div>
  )
}
