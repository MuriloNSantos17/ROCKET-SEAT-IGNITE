import styles from './Avatar.module.css'

interface AvatarProps {
    hasBorder?: boolean,
    src: string,
    alt?: string
}

const Avatar = ({ src, hasBorder, alt }: AvatarProps) => {
    return (
        <img
            src={src}
            className={hasBorder ? styles.avatarWithBorder : styles.avatar}
            alt={alt}
        />
    );
}

export default Avatar;