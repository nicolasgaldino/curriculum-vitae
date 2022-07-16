import Button from './Button';
import styles from '../styles/components/Projects.module.css';

const Projects = () => {
  return (
    <>
      <section >
        <h2>Projetos</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur, sit. Voluptatum facilis recusandae asperiores laudantium harum rem dolorum dolor minima.</p>
        <span>
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