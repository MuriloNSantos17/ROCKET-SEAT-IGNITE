import { Fragment, useState } from "react";
import styles from './ListTaks.module.css';
import TaskDetail from "./TaskDetail";

export interface TasksModel {
    id: number,
    task: string,
}

interface TaskProps {
    tasks: TasksModel[]
}

const ListTaks = ({ tasks }: TaskProps) => {

    const [finishedTask, setFineshedTask] = useState(0);

    return (
        <Fragment>
            <div className={styles.divList}>
                <p className={styles.createdTask}>
                    Tarefas Criadas
                    <span>
                        {tasks.length}
                    </span>
                </p>
                <p className={styles.finishedTask}>
                    Concluídas
                    <span>
                        {finishedTask} de
                        {' ' + tasks.length}
                    </span>
                </p>
            </div>
            {
                tasks.map((item) => {                
                    return <TaskDetail id={item.id} task={item.task} />
                })
            }
        </Fragment>

    )
}

export default ListTaks;