import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react"
import styles from "./styles.module.css"

type ContainerProps = {
    children: ReactNode,
    direction?: 'row' | 'col',
    justify?: "between" | "center" | "evenly",
    items?: "start" | "center" | "end",
    gap?: string, 
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>


export const Container = ({ children, direction = "col",justify, gap="8px", items, className, ...props }: ContainerProps) => (
    <div
        className={`${styles.container} ${className}`}
        data-direction={direction}
        data-justify={justify}
        data-items={items}
        {...props}
    >
        {children}
    </div>
)