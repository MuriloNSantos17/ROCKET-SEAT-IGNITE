import { TasksModel } from "./ListTask";
import styles from './TaksDetail.module.css';

const TaskDetail = (detail: TasksModel) => {
    console.log();
    return (
        <div className={styles.container}>
            <p>{detail.task}</p>
        </div>
    )
}

export default TaskDetail;