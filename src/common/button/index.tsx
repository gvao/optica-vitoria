import { ButtonHTMLAttributes, ReactNode } from "react";
import styles from './styles.module.css'

type ButtonProps = {
    fill?: 'default' | 'border' | 'minimal',
    upperCase?: boolean,
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({ className, fill="default", upperCase = false, children, ...props }: ButtonProps) => (
    <button
        className={`${styles.button} ${className}`}
        data-fill={fill}
        data-upperCase={upperCase}
        {...props}
    >
        {children}
    </button>
)