import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react"
import styles from "./styles.module.css"

interface RootProps extends DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement> {
    children: ReactNode,

}

export const Root = ({ children, ...props }: RootProps) => (
    <ul
        className={styles.root}
        {...props}
    >
        {children}
    </ul>
)