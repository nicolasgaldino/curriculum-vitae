import styles from '../styles/components/InfoCard.module.css';

const InfoCard = ({ title, paragraph, icon, iconName }) => {
  return (
    <>
      <div className={styles.InfoCard}>
        <div className={iconName}>
          {icon}
          <div>
            <h3>{title}</h3>
            <p>{paragraph}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default InfoCard