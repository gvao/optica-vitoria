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

const { getState, setState } = clientsStore

export const useClientsStore = (fn = (state: ClientsStoreProps) => state) => clientsStore(fn)

export const addClientInStore = (newClient: Client): void => {
    const id = generateToken()

    setState(state => ({
        clients: [...state.clients, {
            id,
            ...newClient,
        }]
    }))
}

export const setSearch = (newValue: string) => setState(state => ({ ...state,  search: newValue }))