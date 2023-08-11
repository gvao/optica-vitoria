'use client'

import { FormComponent, getInputs } from "@/common/form";
import { usePathname, useRouter } from "next/navigation";
import { ChangeEventHandler, FormEventHandler, useState } from "react";

const newPedido = (newData: {}) => fetch('/api/pedidos', {
    method: 'POST',
    headers: {
        'Content-Type': 'Application/json'
    },
    body: JSON.stringify(newData)
})

export const FormNewPedido = ({ ...props }) => {

    const [data, setData] = useState({})
    const router = useRouter()
    const pathName = usePathname()

    const changeHandle: ChangeEventHandler<HTMLInputElement> = ({ target: { id, value } }) => setData(state => ({ ...state, [id]: value }))

    const onSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
        const inputs = getInputs(event.target)

        const novoPedido = await newPedido(inputs)

        console.log( await novoPedido.json())
        router.back()
    }

    return (
        <FormComponent.Root onSubmit={onSubmit} {...props} >

            <FormComponent.Input id="name" state={data} onChange={changeHandle} />
            <FormComponent.Input id="value" type="number" state={data} onChange={changeHandle} />

            <FormComponent.Button>Enviar</FormComponent.Button>
        </FormComponent.Root>
    )
}