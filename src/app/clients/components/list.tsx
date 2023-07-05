'use client'
import styles from './styles.module.css'

import { useClientsStore } from "@/store/clients"
import { ChevronRightIcon } from "@heroicons/react/24/solid";

export const ListClients = () => {

    const { clients } = useClientsStore()

    return <>
        <ul className={styles.card_wrapper} >
            {clients.map(client => (
                <li key={client.id} className={`${styles.item} ${styles.card_item}`}>
                    <div className="info">
                        <h2>{client.name}</h2>
                        <p>{client.id}</p>
                    </div>

                    <ChevronRightIcon className={styles.icon} />
                </li>
            ))}

        </ul>
    </>
}