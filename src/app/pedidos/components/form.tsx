'use client'

import { FormComponent, getInputs } from "@/common/form";
import { usePathname, useRouter } from "next/navigation";
import { ChangeEventHandler, FormEventHandler, useState } from "react";
import { addPedidoStore } from "@/store/clients";
import { Pedido } from "@/store/types";


const newPedido = (newData: {}) => fetch('/api/pedidos', {
    method: 'POST',
    headers: {
        'Content-Type': 'Application/json'
    },
    body: JSON.stringify(newData)
})


const useForm = () => {
    const [data, setData] = useState({})
    const router = useRouter()
    const pathName = usePathname()

    const changeHandle: ChangeEventHandler<HTMLInputElement> = ({ target: { id, value } }) => setData(state => ({ ...state, [id]: value }))

    const onSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
        const inputs = getInputs(event.target)

        const pedido = {
            ...inputs, userId: 'sbdbd', createdDate: Date.now(),
        } as Pedido

        const novoPedido = await newPedido(pedido)

        const storePedido = addPedidoStore(pedido)

        console.log(await storePedido)
        router.back()
    }

    return {
        data,
        onSubmit,
        changeHandle,
    }
}

export const FormNewPedido = ({ title = '', ...props }) => {

    const {
        data,
        onSubmit,
        changeHandle,
    } = useForm()

    return (
        <FormComponent.Root onSubmit={onSubmit} {...props} >

            <FormComponent.Title>
                {title}
            </FormComponent.Title>

            <FormComponent.Input id="valor" type="number" state={data} onChange={changeHandle} placeholder="Valor do pedido"/>

            <FormComponent.Button>Enviar</FormComponent.Button>
        </FormComponent.Root>
    )
}