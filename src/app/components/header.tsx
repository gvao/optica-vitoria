import { Container } from "@/common/container";
import styles from '../styles/layout.module.css'
import { Bars2Icon } from "@heroicons/react/24/solid";

export const Header = () => (
    <header className={styles.header} >
        <Container className={styles.headerContainer} >
            <a href="/">
                Óptica Vitória
            </a>

            <span>
                <Bars2Icon className={styles.icon} />
            </span>
        </Container>
    </header>
)

