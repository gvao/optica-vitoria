import { Container } from "@/common/container"
import styles from "../styles.module.css"

import { Link } from "@/common/link"

type TabsProps = {
    tab: string,
}

export const Tabs = ({ tab }: TabsProps) => {
    const isTabSelected = (tabLabel: string) => tab === tabLabel ? styles.tabs_selected : ""

    return (
        <section >
            <Container className={styles.tabs} >
                <Link href="?tab=pedidos" className={`${styles.tabs_link} ${isTabSelected('pedidos')}`} >Pedidos</Link>
                <Link href="?tab=delete" className={`${styles.tabs_link} ${isTabSelected('delete')}`}>Delete</Link>
            </Container>
        </section>
    )
}