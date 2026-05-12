import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styles from './Sidebar.module.css'

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true)
  const location = useLocation()

  const menuItems = [
    { path: '/dashboard', label: 'Dashboard', icon: '📊' },
    { path: '/orders', label: 'Orders', icon: '📋' },
    { path: '/menu', label: 'Menu', icon: '🍽️' },
    { path: '/analytics', label: 'Analytics', icon: '📈' },
  ]

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  const isActive = (path) => location.pathname === path

  return (
    <>
      <button 
        className={styles.toggleBtn}
        onClick={toggleSidebar}
        aria-label="Toggle sidebar"
      >
        ☰
      </button>
      <nav className={`${styles.sidebar} ${!isOpen ? styles.collapsed : ''}`}>
        <div className={styles.header}>
          <h1 className={styles.logo}>🍕 RestoAdmin</h1>
        </div>
        <ul className={styles.menu}>
          {menuItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`${styles.menuItem} ${isActive(item.path) ? styles.active : ''}`}
              >
                <span className={styles.icon}>{item.icon}</span>
                <span className={styles.label}>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}
