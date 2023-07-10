'use client'
import { FormComponent } from "@/common/form"
import { addClientInStore } from "@/store/clients"
import { Client } from "@/store/types"
import { useRouter } from "next/navigation"

import { ChangeEventHandler, FormEventHandler, useState } from "react"

const initialValue: Client = {
    name: '',
    active: false,
}

export const FormClient = () => {
    const [client, setClient] = useState(initialValue)

    const router = useRouter()

    const resetInputs = () => setClient(initialValue)
    const closePopup = () => router.push('/clients')

    const onSubmit: FormEventHandler<HTMLFormElement> | undefined = (event) => {
        event.preventDefault()
        addClientInStore(client)
        resetInputs()
        closePopup()
    }

    const onChange: ChangeEventHandler<HTMLInputElement> | undefined = ({ target: { id, value } }) =>
        setClient(state => ({ ...state, [id]: value }))

    return (
        <FormComponent.Root onSubmit={onSubmit}>
            <h2>Novo cliente</h2>
            <FormComponent.Input
                name="name"
                id="name"
                state={client}
                onChange={onChange}
                placeholder="Nome do cliente"
                autoFocus
            />

            <FormComponent.Button type="submit" >Enviar</FormComponent.Button>
        </FormComponent.Root>
    )
}

