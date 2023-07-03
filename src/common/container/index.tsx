import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react"
import styles from "./styles.module.css"

type ContainerProps = {
    children: ReactNode,
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>


export const Container = ({ children, className }: ContainerProps) => (
    <div className={`${styles.container} ${className}`} >
        {children}
    </div>
)