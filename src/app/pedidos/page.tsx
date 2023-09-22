import { Link } from "@/common/link"
import { Container } from "@/common/container"
import { Button } from "@/common/button"
import { ClientList } from "@/components/clientList"

interface PedidosProps {
    searchParams: Record<string, string>,
}

export default async function PedidosPage({ searchParams }: PedidosProps) {


    return (
        <Container>
            <h1>Pedidos</h1>

            <Button>
                <Link href="/pedidos/add">
                    add
                </Link>

            </Button>

            <ClientList />

        </Container>
    )
}