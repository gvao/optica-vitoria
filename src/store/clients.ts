import { create } from "zustand"
import { Client, ClientsStoreProps } from "./types"

const fakeClients: Client[] = [
    { id: '1', fullName: 'Yuri Moreira Galvao Prado', name: 'Yuri'},
    { id: '2', fullName: 'Vitoria Erica Teixeira Lima', name: 'Erica'},
    { id: '3', fullName: 'Alice Fernandes Galvão Prado', name: 'Alice'},
]


const clientsStore = create<ClientsStoreProps>(set => ({
    clients: [ ...fakeClients ],
    pedidos: [],
}))

const { getState, setState } = clientsStore

export const useClientsStore = (fn = (state: ClientsStoreProps) => state) => clientsStore(fn)

export const addClientInStore = (newClient: Client): void => {
    const id = generateToken()

    setState(state => ({ clients: [...state.clients, {
        id,
        ...newClient,
    }] }))
}

const generateToken = (size = 20) => {
    const charSet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ01234567890'
    let token = ''

    for ( let i = 0; i < size; i++) {
        const randomNumber = Math.round( Math.random() * charSet.length )
        token += charSet.charAt(randomNumber)
    }

    return token
}

