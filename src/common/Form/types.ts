import { FormHTMLAttributes, ReactNode, InputHTMLAttributes, ButtonHTMLAttributes } from "react"


type PropsType = {
    children?: ReactNode,
}

export type RootProps = PropsType & FormHTMLAttributes<HTMLFormElement>

export type ButtonProps = PropsType & ButtonHTMLAttributes<HTMLButtonElement>

export type InputProps = {
    state: string | {
        [id: string]: any,
    },
    id: string,
} & PropsType & InputHTMLAttributes<HTMLInputElement>
