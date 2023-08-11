import { DetailedHTMLProps, LiHTMLAttributes, ReactNode } from "react"
import styles from "./styles.module.css"


interface RootProps extends DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement> {
    children: ReactNode,

}

export const Item = ({ children, ...props }: RootProps) => (
    <li
        className={styles.item}
        {...props}
    >
        {children}
    </li>
)