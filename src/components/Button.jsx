import styles from '../styles/components/Button.module.css';

const Button = ({ link, text }) => {
  return (
    <>
      <a href={link} className={styles.btn}>{text}</a>
    </>
  )
}

export default Button