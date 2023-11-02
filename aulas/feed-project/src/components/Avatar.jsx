import styles from './Avatar.module.css'

const Avatar = ({ src, hasBorder = true }) => {
    return (
        <img
            src={src}
            className={hasBorder ? styles.avatarWithBorder : styles.avatar}
        />
    );
}

export default Avatar;