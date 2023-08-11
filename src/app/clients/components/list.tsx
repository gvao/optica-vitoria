'use client'
import styles from './styles.module.css'

import { setSearch, useClientsStore } from "@/store/clients"
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { Link } from '@/common/link';
import { Button } from '@/common/button';
import { Client } from '@/store/types';
import { FormComponent } from '@/common/form';
import { Card } from '@/common/card';

export const ListClients = () => {

    const { clients, search } = useClientsStore()

    const filteredClients = clients
        .filter(client => client.name.toLowerCase().includes(search.toLowerCase()))

    return <>
        <div className={styles.card_wrapper} >

            <div className={styles.searchArea} >
                <FormComponent.Input
                    id='search'
                    onChange={({ target }) => setSearch(target.value)}
                    placeholder='Pesquise...'
                    state={search}
                    autoFocus
                />

                <Button>
                    <Link href={`?popup=add`}>
                        +
                    </Link>
                </Button>
            </div>

            <List
                data={filteredClients}
            />

        </div>
    </>
}

const List = ({ data }: { data: Client[] }) => {
    return (
        <ul className={styles.list} >

            {data.map(client => (

                <li key={client?.id} className={`${styles.item}`}>

                    <Card.Root>
                        <Link href={`/clients/${client?.id}?tab=pedidos`} className={styles.item} >
                            <div className="info">
                                <h2>{client?.name}</h2>
                                {/* <p>{client?.id}</p> */}
                            </div>

                            <div
                                className={styles.icon}
                            >
                                <ChevronRightIcon />
                            </div>

                        </Link>
                    </Card.Root>

                </li>
            ))}

        </ul>
    )
}


