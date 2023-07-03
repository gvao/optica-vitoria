import { Container } from "@/common/container";
import styles from '../styles/layout.module.css'

export const Nav = () => (
    <nav className={styles.nav} >
        <Container className={styles.navContainer}>
            <a href="/">home</a>
            <a href="/clients">Clientes</a>
        </Container>
    </nav>
)