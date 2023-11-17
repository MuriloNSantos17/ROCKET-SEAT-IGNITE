import { ChangeEvent, useState } from "react";
import styles from './TaksDetail.module.css';
import { Trash } from "phosphor-react";

interface TaskDetailProps {
    id: number;
    task: string;
    endTask: () => void;
    restartTask: () => void;
    deleteTask: (id: number) => void;
}

const TaskDetail = ({ id, task, endTask, restartTask, deleteTask }: TaskDetailProps) => {

    const [finish, setFinish] = useState(false);

    const handleCheckTask = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked) {
            endTask();
            setFinish(true);
        } else {
            restartTask();
            setFinish(false);
        }
    }

    const handleDelete = () => {
        if (finish) {
            restartTask();
            setFinish(false);
        }

        deleteTask(id);
    }


    return (
        <div className={styles.container}>
            <div className={styles.divForm}>
                <input type="checkbox" onChange={handleCheckTask} />
                <p className={finish ? styles.paragraphFinished : ''}>
                    {task}
                </p>
            </div>
            <button title="Deletar">
                <Trash size={15} className={styles.buttonDelete} onClick={handleDelete} />
            </button>

        </div>
    )
}

export default TaskDetail;