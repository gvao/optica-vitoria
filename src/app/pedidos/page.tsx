import { Link } from "@/common/link"
import { Pedido } from "../api/pedidos/route"
import { FormNewPedido } from "./components/form"
import { List } from "@/common/list"

interface PedidosProps {
    searchParams: Record<string, string>,
}

export default async function PedidosPage({ searchParams }: PedidosProps) {

    const { lastUpdated, pedidos } = await fetch('http://localhost:3000/api/pedidos', {
        next: {
            revalidate: 1,
        }
    })
        .then(res => res.json())
        .catch(console.error)

    console.log(`pedidos`, searchParams.add)

    return (
        <>
            <h1>Pedidos</h1>

            <Link href="/pedidos/add">add</Link>

            <h2>{lastUpdated}</h2>

            <List.Root>
                {
                    pedidos.map((pedido: Pedido) => (
                        <List.Item key={pedido.id} >{pedido.name} = {pedido.value}</List.Item>
                    ))
                }
            </List.Root>

        </>
    )
}