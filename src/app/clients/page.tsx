import { Popup } from "@/common/popup";
import { FormClient } from "./components/form";
import { ListClients } from "./components/list";
import { Container } from "@/common/container";

type ClientsPageProps = {
    searchParams: {
        popup?: string;
    }
}

export default function ClientsPage({ searchParams }: ClientsPageProps) {

    return (
        <Container>
            <h1>Clients</h1>

            {searchParams?.popup === 'add' && (
                <Popup.Root>
                    <FormClient />
                </Popup.Root>
            )}

            <ListClients />
        </Container>
    )
}