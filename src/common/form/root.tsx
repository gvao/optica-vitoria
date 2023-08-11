'use client'

import { RootProps } from "./type";
import styles from "./styles.module.css"
import { FormEventHandler } from "react";


export const Root = ({ children, onSubmit = () => { }, ...props }: RootProps) => {

    const onSubmitForm: FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault()
        onSubmit(event)
    }

    return (
        <form
            className={styles.form}
            onSubmit={onSubmitForm}
            {...props}
        >
            {children}
        </form>
    )
}