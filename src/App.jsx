import { Header } from './components/Header';
import { Post } from './components/Post';
import './global.css';
import styles from './App.module.css';
import { Sidebar } from './components/Sidebar';

export function App() {
  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          <Post 
            author="Matheus Lima"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo impedit debitis molestias, unde ipsa quasi praesentium assumenda nesciunt repellendus ratione libero quisquam adipisci. Nobis, at sed laborum impedit reprehenderit recusandae?"
          />
          <Post 
            author="Matheus Lima"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo impedit debitis molestias, unde ipsa quasi praesentium assumenda nesciunt repellendus ratione libero quisquam adipisci. Nobis, at sed laborum impedit reprehenderit recusandae?"
          />
        </main>
      </div>
    </div>
  )
}