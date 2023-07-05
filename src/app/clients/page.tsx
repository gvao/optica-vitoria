import { FormClient } from "./components/form";
import { ListClients } from "./components/list";

export default function ClientsPage() {

    return (
        <>
            <h1>Clients</h1>

            <FormClient />
            <ListClients />
        </>
    )
}