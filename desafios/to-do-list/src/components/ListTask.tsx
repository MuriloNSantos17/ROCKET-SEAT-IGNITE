import { Fragment, useState } from "react";
import styles from './ListTaks.module.css';
import TaskDetail from "./Task";

export interface TasksModel {
    id: number,
    task: string,
}

interface TaskProps {
    tasks: TasksModel[]
}

const ListTaks = ({ tasks }: TaskProps) => {
    const [createdTask, setCreatedTask] = useState(tasks.length);
    const [finishedTask, setFineshedTask] = useState(0);

    console.log(tasks);

    return (
        <Fragment>
            <div className={styles.divList}>
                <p className={styles.createdTask}>
                    Tarefas Criadas
                    <span>
                        {createdTask}
                    </span>
                </p>
                <p className={styles.finishedTask}>
                    Concluídas
                    <span>
                        {finishedTask} de
                        {' ' + createdTask}
                    </span>
                </p>
            </div>
            {
                tasks.map((item) => {
                    return <TaskDetail/>
                })
            }
        </Fragment>

    )
}

export default ListTaks;