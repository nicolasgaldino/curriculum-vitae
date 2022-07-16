import AbouteMe from './AbouteMe';
import Stacks from './Stacks';
import Projects from './Projects';
import styles from '../styles/components/Main.module.css';

const Main = () => {
  return (
    <>
      <div className={styles.mainContent}>
        <AbouteMe />
        <Stacks />
        <Projects />
      </div>
    </>
  )
}

export default Main