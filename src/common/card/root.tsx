import styles from './styles.module.css'
import { CardRootProps } from './types'


export const CardRoot = ({ children }: CardRootProps) => {

    return (
        <div className={styles.card_wrapper} >
            {children}
        </div>
    )
}
