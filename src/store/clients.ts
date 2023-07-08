import { create } from "zustand"
import { persist } from "zustand/middleware"

import { Client, ClientsStoreProps } from "./types"
import { generateToken } from "@/utils/number"

const clientsStore = create(
    persist<ClientsStoreProps>(
        (set, get) => ({
            clients: [],
            pedidos: [],
            search: '',
        }),
        { name: 'optica-vitoria' }
    )
)

clientsStore.subscribe((state, prev) => {
    console.log(`Prev state: `, prev, `\n State: `, state)
})

const { setState } = clientsStore

export const useClientsStore = (fn = (state: ClientsStoreProps) => state) => clientsStore(fn)

export const useClientId = (id: string) => {
    const { clients } = useClientsStore()
    const client = clients.find(client => client.id === id)!

    function changeStatus() {
        client.active = !client.active

        setState({ clients })
    }

    return {
        client,
        changeStatus,
    }
}

export const addClientInStore = (newClient: Client): void => {
    const id = generateToken()

    setState(state => ({
        clients: [...state.clients, {
            id,
            ...newClient,
        }]
    }))
}

export const removeClientInStore = (clientId: string) =>
    setState(({ clients }) => ({ clients: clients.filter(client => client.id !== clientId) }))

export const setSearch = (newValue: string) =>
    setState(state => ({ ...state, search: newValue }))