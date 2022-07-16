import styles from '../styles/components/Button.module.css';

const Button = ({ link, text }) => {
  return (
    <>
      <a href={link} target="_blank" rel="noreferrer" className={styles.btn}>{text}</a>
    </>
  )
}

export default Button