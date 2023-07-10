
import { Header } from "./components/header"
import { Tabs } from "./components/tabs"
import { SectionRemoveClient } from "./components/remove-client"

import { ReactNode } from "react"

type PageProps = {
    params: {
        id: string,
    },
    searchParams: {
        tab: string,
    }
}

type TabsProps = {
    [key: string]: ReactNode,
}

export default function DetailsClient({ params, searchParams }: PageProps) {
    
    const tabs: TabsProps = {
        delete: <SectionRemoveClient id={params.id} />,
        pedidos: null,
    }

    return (
        <>
            {/* <Header id={params.id} /> */}

            <Tabs tab={searchParams.tab} />

            {tabs[searchParams?.tab]}

        </>
    )
}

