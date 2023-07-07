'use client'
import { useClientId } from "@/store/clients"

import styles from "../styles.module.css"
import { Container } from "@/common/container";

type HeaderProps = {
    id: string;
}

export const Header = ({ id }: HeaderProps) => {
    const { client } = useClientId(id)

    const textClientActive = !!client.active ? 'ativo' : 'inativo'

    return (
        <div className={styles.header}>
            <Container >

                <h1>{client.name}</h1>
                <p>status: {textClientActive} <BallIcon active={!!client.active} /></p>
                
            </Container>
        </div>
    )
}



const BallIcon = ({ active = false }: { active?: boolean }) =>
    <div className={`${styles.ball}`} data-active={active ? "active" : ""} />