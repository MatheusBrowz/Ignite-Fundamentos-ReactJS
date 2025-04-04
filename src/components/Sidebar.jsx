import styles from './Sidebar.module.css';
import { PencilLine } from 'phosphor-react'; 

export function Sidebar() {
  return  (
    <aside className={styles.sidebar}> 
      <img 
        className={styles.cover}
        src="https://plus.unsplash.com/premium_photo-1678565999332-1cde462f7b24?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        
      <div className={styles.profile}>
        <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/48694853?v=4"/>
        <strong>Matheus Lima</strong>
        <span>Web Developer</span>   
      </div>

      <footer>
        <a href="#">
          <PencilLine size="20" />
          Editar seu perfil
        </a>    
      </footer>                
    </aside>
  )
}
