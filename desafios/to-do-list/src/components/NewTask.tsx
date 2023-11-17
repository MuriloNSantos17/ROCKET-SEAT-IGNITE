import { PlusCircle } from 'phosphor-react';
import styles from './NewTask.module.css';
import { FormEvent, Fragment, useState } from 'react';
import ListTaks from './ListTask';

const NewTask = () => {
    const [tasks, setTasks] = useState([{
        id: 1,
        task: "teste rex"
    }]);

    const [data, setData] = useState('');


    const handleAddTask = (e: FormEvent) => {
        e.preventDefault();

        setTasks([
            ...tasks,
            {
                id: tasks.length + 1,
                task: data
            }
        ]);

        setData('');
    }

    return (
        <Fragment>
            <form className={styles.form}>
                <input
                    value={data}
                    onChange={(e) => { setData(e.target.value) }}
                    className={styles.inputNewTask}
                    placeholder='Adicione uma nova tarefa'
                />
                <button className={styles.buttonAdd} onClick={(e) => {
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