export type Pedido = {
    createdDate?: number,
    valor: number,
    userId: string,
}

export type Client = {
    id?: string;
    fullName?: string;
    name: string;
    active: boolean;
}

export type ClientsStoreProps = {
    clients: Client[],
    pedidos: Pedido[],
    search: string,
}
