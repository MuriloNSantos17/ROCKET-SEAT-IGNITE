import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css'
import { useState } from 'react';
import Avatar from './Avatar';

interface CommentProps {
    content: string;
    onDeleteComment: (comment: string) => void;
}

const Comment = ({ content, onDeleteComment }: CommentProps) => {
    const [likeCount, setLikeCount] = useState(0);

    const handleDeleteComment = () => {
        onDeleteComment(content);
    }

    const handleLikeComment = () => {
        setLikeCount((state) => {
            return state + 1;
        })
    }

    return (
        <div className={styles.comment}>
            <Avatar src={"https://i.pinimg.com/736x/66/60/ba/6660ba12928b8c135aa9e3817ee9437a.jpg"} hasBorder={false} alt="Avatar"/>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Peter Parker 🕷</strong>
                            <time title='02 de Novembro as 11:28' dateTime='2023-11-02'> Cerca de há 1 hora atrás</time>
                        </div>
                        <button
                            onClick={handleDeleteComment}
                            title='Deletar comentário'
                        >
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}

export default Comment;