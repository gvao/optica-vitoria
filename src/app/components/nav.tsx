import { ClipboardDocumentListIcon, HomeIcon, ListBulletIcon } from '@heroicons/react/24/solid';

import styles from '../styles/layout.module.css';
import { Container } from "@/common/container";

export const Nav = () => (
    <nav className={styles.nav} >
        <Container direction="row" className={styles.navContainer}>
            <a href="/">
                <HomeIcon title='Home' className={styles.icon}/>
            </a>
            <a href="/clients">
                <ListBulletIcon title='Clientes' className={styles.icon}/>
            </a>
            {/* <a href="/pedidos">
                <ClipboardDocumentListIcon title='Pedidos' className={styles.icon}/>
            </a> */}
        </Container>
    </nav>
);
