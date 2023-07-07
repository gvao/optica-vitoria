'use client'
import { FormComponent } from "@/common/Form"
import { addClientInStore } from "@/store/clients"
import { Client } from "@/store/types"

import { ChangeEventHandler, FormEventHandler, useState } from "react"

const initialValue: Client = {
    name: ''
}

export const FormClient = () => {

    const [client, setClient] = useState(initialValue)

    const resetInputs = () => setClient(initialValue)

    const onSubmit: FormEventHandler<HTMLFormElement> | undefined = (event) => {
        event.preventDefault()
        addClientInStore(client)
        resetInputs()
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
            />

            <FormComponent.Button type="submit" >Enviar</FormComponent.Button>
        </FormComponent.Root>
    )
}

