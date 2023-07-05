import { ButtonProps } from "./types";
import styles from "./styles.module.css"


export const Button = ({ children, ...props }: ButtonProps) => (
    <button className={styles.button} {...props}>
        {children}
    </button>
)