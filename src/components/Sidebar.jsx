import ProfilePic from '../img/profile.jpg';
import styles from '../styles/components/Sidebar.module.css';

const Sidebar = () => {
  return (
    <>
      <aside className={styles.sideBar}>
        <img src={ProfilePic} alt="Nícolas Galdino"/>
        <p className={styles.title}>Desenvolvedor Front-end</p>
        <p>Redes Sociais</p>
        <p>Informações de Contato</p>
        <a href="#" className={styles.btn}>Baixar Currículo</a>
      </aside>
    </>
  )
}

export default Sidebar