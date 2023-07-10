import { ButtonHTMLAttributes, ReactNode } from "react";
import styles from './styles.module.css'

type ButtonProps = {
    style?: 'default' | 'border' | 'minimal',
    upperCase?: boolean,
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({ className, style="default", upperCase = false, children, ...props }: ButtonProps) => (
    <button
        className={`${styles.button} ${className}`}
        data-fill={style}
        data-upperCase={upperCase}
        {...props}
    >
        {children}
    </button>
)