import ProfilePic from '../img/profile.jpg';
import styles from '../styles/components/Sidebar.module.css';
import Button from './Button';
import SocialMedia from './SocialMedia';

const Sidebar = () => {
  return (
    <>
      <aside className={styles.sideBar}>
        <img src={ProfilePic} alt="Nícolas Galdino"/>
        <p className={styles.title}>Desenvolvedor Front-end</p>
        <SocialMedia />
        <p>Informações de Contato</p>
        <Button 
        link="#"
        text='Baixar Currículo'
        />
      </aside>
    </>
  )
}

export default Sidebar