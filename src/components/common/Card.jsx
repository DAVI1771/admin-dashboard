import styles from './Card.module.css'

export const Card = ({ 
  children, 
  title, 
  subtitle,
  className = '',
  onClick,
  hoverable = false
}) => {
  return (
    <div 
      className={`${styles.card} ${hoverable ? styles.hoverable : ''} ${className}`}
      onClick={onClick}
    >
      {title && (
        <div className={styles.header}>
          <h3 className={styles.title}>{title}</h3>
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </div>
      )}
      <div className={styles.content}>
        {children}
      </div>
    </div>
  )
}
