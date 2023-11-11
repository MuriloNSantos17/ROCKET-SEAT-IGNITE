import { PlusCircle } from 'phosphor-react';
import styles from './NewTask.module.css';
import { FormEvent, Fragment, useState } from 'react';
import ListTaks from './ListTask';

const NewTask = () => {
    const [tasks, setTasks] = useState([{
        id: 1,
        task: "teste rex"
    }]);


    const handleAddTask = (e: FormEvent)=>{
        e.preventDefault();
        
        setTasks([
            ...tasks,
            {
                id: tasks.length + 1,
                task: 'hahaha'
            }
        ])
    }

    return (
        <Fragment>
            <form className={styles.form}>
                <input
                    className={styles.inputNewTask}
                    placeholder='Adicione uma nova tarefa'
                />
                <button className={styles.buttonAdd} onClick={(e)=>{
                    handleAddTask(e);
                }}>
                    <PlusCircle size={20} />
                    Criar
                </button>
            </form>
            <ListTaks tasks={tasks} />
        </Fragment>
    )
}

export default NewTask;