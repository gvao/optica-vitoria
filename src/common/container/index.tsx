import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react"
import styles from "./styles.module.css"

type ContainerProps = {
    children: ReactNode,
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>


export const Container = ({ children, className, ...props }: ContainerProps) => (
    <div className={`${styles.container} ${className}`} {...props} >
        {children}
    </div>
)