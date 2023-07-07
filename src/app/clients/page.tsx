import { Popup } from "@/common/popup";
import { FormClient } from "./components/form";
import { ListClients } from "./components/list";

type ClientsPageProps = {
    searchParams: {
        popup?: string;
    }
}

export default function ClientsPage({ searchParams }: ClientsPageProps) {

    return (
        <>
            <h1>Clients</h1>

            {searchParams?.popup === 'add' && (
                <Popup.Root>
                    <FormClient />

                </Popup.Root>
            )}

            <ListClients />
        </>
    )
}