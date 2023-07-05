import { ChevronRightIcon } from "@heroicons/react/24/solid";
import styles from './styles.module.css'

type Client = {
    id: string;
    fullName: string;
}

const clients: Client[] = [
    { id: '1', fullName: 'Yuri Moreira Galvao Prado', },
    { id: '2', fullName: 'Vitoria Erica Teixeira Lima', },
    { id: '3', fullName: 'Alice Fernandes Galvão Prado', },
]

export default function ClientsPage() {

    return (
        <>
            <h1>Clients</h1>

            <ul className={styles.card_wrapper} >
                {clients.map(client => (
                    <li key={client.id} className={`${styles.item} ${styles.card_item}`}>
                        <h2>{client.fullName}</h2>
                        <ChevronRightIcon className={styles.icon} />
                    </li>
                ))}

            </ul>
        </>
    )
}