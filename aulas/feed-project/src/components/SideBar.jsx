import { PencilLine } from 'phosphor-react'
import styles from './SideBar.module.css'

const Sidebar = () => {
    return (
        <aside className={styles.sidebar}>
            <img
                src="https://images.unsplash.com/photo-1605379399642-870262d3d051?auto=format&fit=crop&q=50&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className={styles.cover} />
            <div className={styles.profile}>
                <img src="https://avatars.githubusercontent.com/u/49132949?v=4" className={styles.avatar} />
                <strong>Murilo Santos</strong>
                <span>Web Developer</span>
                <footer>
                    <a href="#">
                        <PencilLine size={20}/>
                        Editar seu Perfil
                    </a>
                </footer>
            </div>
        </aside>
    )
}

export default Sidebar;