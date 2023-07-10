import { ReactNode } from "react"

export type PageProps = {
    params: {
        id: string,
    },
    searchParams: {
        tab: string,
    }
}

export type TabsProps = {
    [key: string]: ReactNode,
}
