'use client'
import { useClientsStore } from "@/store/clients"

type PageProps = {
    params: {
        id: string,
    }
}

export default function DetailsClient({ params, ...props }: PageProps) {
    const { clients } = useClientsStore()
    
    const client = clients.find(client => client.id === params.id)!

    return (
        <>
            <h1>{client.name}</h1>
            <p>id: {client.id}</p>
        </>
    )
}