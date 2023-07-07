import { ButtonHTMLAttributes, ReactNode } from "react";
import styles from './styles.module.css'

export const Button = ({ className,  children, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) => (
    <button
        className={`${styles.button} ${className}`}
        {...props}
    >
        {children}
    </button>
)