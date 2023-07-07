'use client'

import { Button } from "@/common/button"
import { Container } from "@/common/container"
import { removeClientInStore } from "@/store/clients"
import { MouseEventHandler } from "react"

import styles from "../styles.module.css"
import { useRouter } from "next/navigation"


export const SectionRemoveClient = ({ id }: { id: string }) => {

    const { back } = useRouter()

    const cancelDeleteClient = () =>  {
        console.log('cancel')
        back()
    }

    const deleteClient: MouseEventHandler<HTMLButtonElement> = () => {
        // removeClientInStore(id)
        console.log('delete')
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