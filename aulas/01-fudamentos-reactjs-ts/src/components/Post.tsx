import { FormEvent, ChangeEvent, useState, InvalidEvent } from 'react';
import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import styles from './Post.module.css';
import Comment from './Comment';
import Avatar from './Avatar';

interface Author {
    name: string;
    role: string;
    avatarURL: string
}

interface PostProps {
    author: Author;
    publishedAt: Date;
    content: Content[]
}

interface Content {
    type: 'paragraph' | 'link';
    content: string,
}

export function Post({ author, publishedAt, content }: PostProps) {
    const publishedDateFormated = format(publishedAt, "d 'de' LLLL 'ás' HH:mm'h'", {
        locale: ptBR
    });

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    });

    const [comments, setComments] = useState(['']);

    const [newCommentText, setNewCommentText] = useState('');

    function handleCreateNewComment(event: FormEvent) {
        event.preventDefault();

        setComments([...comments, newCommentText])
        setNewCommentText('');
    }

    function handleNewComment(event: ChangeEvent<HTMLTextAreaElement>) {
        setNewCommentText(event.target.value)
        event.target.setCustomValidity('');
    }

    function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('Este campo é obrigatório!')
    }

    function deleteComment(commentDelete: string) {
        const commentsWithoutDeleteOne = comments.filter((obj) => obj != commentDelete)
        setComments(commentsWithoutDeleteOne);
    }

    const isNewCommentEmpty = String(newCommentText).trim().length === 0;

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar
                        src={author.avatarURL}
                        alt={"Avatar"}
                        hasBorder={true}
                    />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time title={publishedDateFormated} dateTime={publishedAt.toISOString()}> {
                    publishedDateRelativeToNow
                }</time>
            </header>
            <div className={styles.content}>
                {
                    content.map((line, item) => {
                        if (line.type === 'paragraph') {
                            return <p key={item}>{line.content}</p>
                        } else {
                            return <p key={item}><a href=''>{line.content}</a></p>
                        }
                    })
                }
            </div>
            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea
                    placeholder='Deixe um comentário' name='comment'
                    onInvalid={handleNewCommentInvalid}
                    onChange={handleNewComment}
                    value={newCommentText}
                    required
                />
                <footer>
                    <button
                        disabled={isNewCommentEmpty}
                        type='submit'
                    >
                        Publicar
                    </button>
                </footer>
            </form>
            <div className={styles.commentList}>
                {
                    comments.map((comment) => {
                        return (
                            <Comment
                                onDeleteComment={deleteComment}
                                content={comment}
                                key={comment}
                            />
                        )
                    })
                }
            </div>
        </article>
    )
}
