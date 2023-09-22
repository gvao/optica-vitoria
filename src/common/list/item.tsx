import { DetailedHTMLProps, LiHTMLAttributes, ReactNode } from "react"
import styles from "./styles.module.css"
import { Card } from "../card"


interface RootProps extends DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement> {
    children: ReactNode,

}

export const Item = ({ children, ...props }: RootProps) => (
    <li
        className={styles.item}
        {...props}
    >
        <Card.Root>

            {children}

            
        </Card.Root>
    </li>
)