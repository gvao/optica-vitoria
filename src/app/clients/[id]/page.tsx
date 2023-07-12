import { Tabs } from "./components/tabs"
import { SectionRemoveClient } from "./components/remove-client"
import { PageProps, TabsProps } from './types'
import { Container } from "@/common/container"

export default function DetailsClient({ params, searchParams }: PageProps) {

    const tabs: TabsProps = {
        delete: <SectionRemoveClient id={params.id} />,
        pedidos: null,
    }

    return (
        <Container>

            <Tabs tab={searchParams.tab} />

            {tabs[searchParams?.tab]}

        </Container>
    )
}

