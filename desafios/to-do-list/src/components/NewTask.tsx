import styles from './NewTask.module.css';
import { PlusCircle } from 'phosphor-react';

const NewTask = () => {
    return (
        <form className={styles.form}>
            <input 
                className={styles.inputNewTask} 
                placeholder='Adicione uma nova tarefa'
            />
            <button className={styles.buttonAdd}>
                <PlusCircle size={20}/>
                Criar
            </button>
        </form>
    )
}

export default NewTask;