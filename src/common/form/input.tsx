import styles from "./styles.module.css"
import { InputProps } from "./type"

export const Input = ({ state, id, ...props }: InputProps) => {

    const value = typeof state === 'string' ? state : state[id]

    return (
        <input
            className={styles.input}
            type="text"
            id={id}
            value={value || ""}
            {...props}
        />
    )
}
