import styles from './button.module.css';

interface ButtonProps {
    color?: 'primary' | 'secondary' | 'danger' | 'success'
}

export function Button({ color = "primary" }: ButtonProps) {
    return <button className={`${styles.button} ${styles[color]}`}>Enviar</button>
}