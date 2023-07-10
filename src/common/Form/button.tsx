
import styles from "./styles.module.css"
import { ButtonProps } from "./type"


export const Button = ({ children, ...props }: ButtonProps) => (
    <button className={styles.button} {...props}>
        {children}
    </button>
)