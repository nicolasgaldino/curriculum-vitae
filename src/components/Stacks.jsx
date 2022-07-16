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
          iconDescription="HTML5 é uma linguagem de marcação para a World Wide Web e é uma tecnologia chave da Internet, originalmente proposto por Opera Software. É a quinta versão da linguagem HTML."
        />
        <StacksComponent
        iconStyle={styles.css}
          icon={<DiCss3 />}
          iconName="CSS3"
          iconDescription="CSS3 é a terceira mais nova versão das famosas Cascading Style Sheets, pela qual se define estilos para um projeto web. Com efeitos de transição, imagem, imagem de fundo/background e outros, pode-se criar estilos únicos para seus projetos web, alterando diversos aspectos de design no layout da página."
        />
        <StacksComponent
        iconStyle={styles.javascript}
          icon={<DiJsBadge />}
          iconName="JavaScript"
          iconDescription="JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web."
        />
        <StacksComponent
        iconStyle={styles.react}
          icon={<DiReact />}
          iconName="React"
          iconDescription="O React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web. É mantido pelo Facebook, Instagram, outras empresas e uma comunidade de desenvolvedores individuais. É utilizado nos sites da Netflix, Imgur, Feedly, Airbnb, SeatGeek, HelloSign, Walmart e outros. "
        />
        <StacksComponent
        iconStyle={styles.python}
          icon={<DiPython />}
          iconName="Python"
          iconDescription="Python é uma linguagem de programação de alto nível, interpretada de script, imperativa, orientada a objetos, funcional, de tipagem dinâmica e forte. Foi lançada por Guido van Rossum em 1991."
        />
        <StacksComponent
        iconStyle={styles.git}
          icon={<DiGit />}
          iconName="Git"
          iconDescription="Git ₍ₒᵤ em inglês britânico₎ é um sistema de controle de versões distribuído, usado principalmente no desenvolvimento de software, mas pode ser usado para registrar o histórico de edições de qualquer tipo de arquivo."
        />
      </section>
    </>
  )
}

export default Stacks