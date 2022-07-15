import Main from './components/Main';
import Sidebar from './components/Sidebar';
import styles from './styles/components/App.module.css';

const App = () => {
  return (
    <>
      <div className={styles.portfolio}>
        <h1>Nícolas Galdino</h1>
        <Sidebar />
        <Main />
      </div>
    </>
  )
}

export default App