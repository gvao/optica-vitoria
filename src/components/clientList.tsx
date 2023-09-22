
import { List } from "@/common/list"
import { getPedidos } from "@/store/clients"

export function ClientList() {


    console.log(`get pedidos`, getPedidos())


    return (
        <List.Root>
            {/* {pedidos.map((pedido, index) => {

                console.log(pedido)

                return (
                    // <List.Item key={pedido.id} >{pedido.name}</List.Item>
                    <List.Item key={index} >dsiybdoubd</List.Item>
                )
            })
            } */}
        </List.Root>
    )
}