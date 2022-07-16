import Button from './Button';
import styles from '../styles/components/Projects.module.css';

const Projects = () => {
  return (
    <>
      <section >
        <h2>Projetos</h2>
        <p>Você pode acessar o meu perfil do Github, nele existem todos os meus projetos.</p>
        <span className={styles.portfBtn}>
          <Button
            link="https://github.com/nicolasgaldino"
            text="Ver Portfólio"
          />
        </span>
      </section>
    </>
  )
}

export default Projects