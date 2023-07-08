'use client'
import { MouseEventHandler } from "react"
import { useRouter } from "next/navigation"

import { Button } from "@/common/button"
import { Container } from "@/common/container"
import { removeClientInStore } from "@/store/clients"

import styles from "../styles.module.css"


export const SectionRemoveClient = ({ id }: { id: string }) => {

    const { push, back } = useRouter()

    const cancelDeleteClient = () =>  back()

    const deleteClient: MouseEventHandler<HTMLButtonElement> = () => {
        removeClientInStore(id)
        push('/clients')
        console.log(`delete client ${id}`)
    }

    return (
        <Container>
            <h3>Delete cliente</h3>

            Tem certeza que deseja prosseguir?

            <div className={styles.actions} >
                <Button onClick={cancelDeleteClient}>Cancelar</Button>
                <Button onClick={deleteClient}>Deletar</Button>
            </div>

        </Container>
    )
}