import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css'

const Comment = () => {
    return (
        <div className={styles.comment}>
            <img src="https://i.pinimg.com/736x/66/60/ba/6660ba12928b8c135aa9e3817ee9437a.jpg" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Peter Parker 🕷</strong>
                            <time title='02 de Novembro as 11:28' dateTime='2023-11-02'> Cerca de há 1 hora atrás</time>
                        </div>
                        <button title='Deletar comentário'>
                            <Trash size={24} />
                        </button>
                    </header>
                </div>
                <p>Muito bom Sr. Stark 👏👏👏</p>
                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>


        </div>
    )
}

export default Comment;