import { Container } from "@/common/container";
import styles from '../styles/layout.module.css'

export const Header = () => (
    <header className={styles.header} >
        <Container className={styles.headerContainer} >
            Óptica Vitória
        </Container>
    </header>
)

