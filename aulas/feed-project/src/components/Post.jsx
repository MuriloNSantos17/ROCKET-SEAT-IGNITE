import styles from './Post.module.css';
import Comment from './Comment';

export function Post(props) {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img src="https://img.freepik.com/fotos-premium/tony-stark-personagem-de-desenho-animado-do-homem-de-ferro-ia-generativa_934475-11586.jpg?w=200" className={styles.avatar} />
                    <div className={styles.authorInfo}>
                        <strong>Tony Stark</strong>
                        <span>Iron Man</span>
                    </div>
                </div>
                <time title='02 de Novembro as 11:28' dateTime='2023-11-02'> Publicado há 1 hora</time>
            </header>
            <div className={styles.content}>
                <p>Hello Murilo 👨‍💻</p>
                <p>Acabei de subir mais um projeto no meu portifa, é um projeto que fiz para aprender React 🚀.</p>
                <p>👉{' '}<a href="">TonyStark/starkindustries</a></p>
                <p>
                    <a href="">#novoProjeto</a>{' '}
                    <a href="">#react</a>{' '}
                </p>
            </div>
            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea placeholder='Deixe um comentário' />
                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>
            <div className={styles.commentList}>
                <Comment />
            </div>

        </article>
    )
}
