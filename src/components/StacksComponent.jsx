import styles from '../styles/components/StacksComponent.module.css';

const StacksComponent = ({ iconStyle, iconId, icon, iconName, iconDescription }) => {
  return (
    <>
      <div className={styles.stacksGrid}>
        <div className={styles.stacksCard} id={iconId}>
          <span className={iconStyle}>{icon}</span>
          <div className={styles.stackInfo}>
            <h3>{iconName}</h3>
            <p>{iconDescription}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default StacksComponent