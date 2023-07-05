import styles from "./styles.module.css"
import { InputProps } from "./types"

export const Input = ({ state, id, ...props }: InputProps) => {

    return (
        <input
            className={styles.input}
            type="text"
            id={id}
            value={state[id] || ""}
            {...props}
        />
    )
}
