import { RootProps } from "./type";
import styles from "./styles.module.css"

export const Root = ({ children, ...props }: RootProps) => (
    <form className={styles.form} {...props} >
        {children}
    </form>
)