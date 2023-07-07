type Pedido = {
    createdDate: string,
    valor: number,
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
