import { DiHtml5, DiCss3, DiJsBadge, DiReact, DiPython, DiGit } from 'react-icons/di';
import styles from '../styles/components/Stacks.module.css';
import StacksComponent from './StacksComponent';

/*const myStacks = [
  { id: "html", name: "HTML5", icon: <DiHtml5 /> },
  { id: "css", name: "CSS3", icon: <DiCss3 /> },
  { id: "js", name: "JavaScript", icon: <DiJsBadge /> },
  { id: "react", name: "React", icon: <DiReact /> },
  { id: "python", name: "Python", icon: <DiPython /> },
  { id: "git", name: "Git", icon: <DiGit /> },
];*/

const Stacks = () => {
  return (
    <>
      <section className={styles.stacksContainer}>
        <h2>Tecnologias</h2>
        <StacksComponent
        iconStyle={styles.html}
          icon={<DiHtml5 />}
          iconName="HTML5"
          iconDescription="lkkkkkkkkkkkkkjkhjjjjjjjjjjjjjjjjjjjj"
        />
        <StacksComponent
        iconStyle={styles.css}
          icon={<DiCss3 />}
          iconName="CSS3"
          iconDescription="lkkkkkkkkkkkkkjkhjjjjjjjjjjjjjjjjjjjj"
        />
        <StacksComponent
        iconStyle={styles.javascript}
          icon={<DiJsBadge />}
          iconName="JavaScript"
          iconDescription="lkkkkkkkkkkkkkjkhjjjjjjjjjjjjjjjjjjjj"
        />
        <StacksComponent
        iconStyle={styles.react}
          icon={<DiReact />}
          iconName="React"
          iconDescription="lkkkkkkkkkkkkkjkhjjjjjjjjjjjjjjjjjjjj"
        />
        <StacksComponent
        iconStyle={styles.python}
          icon={<DiPython />}
          iconName="Python"
          iconDescription="lkkkkkkkkkkkkkjkhjjjjjjjjjjjjjjjjjjjj"
        />
        <StacksComponent
        iconStyle={styles.git}
          icon={<DiGit />}
          iconName="Git"
          iconDescription="lkkkkkkkkkkkkkjkhjjjjjjjjjjjjjjjjjjjj"
        />
      </section>
    </>
  )
}

export default Stacks