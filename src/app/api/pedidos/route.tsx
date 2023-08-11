import { NextRequest, NextResponse } from "next/server";

let lastId = 1

export type Pedido = {
    id?: number,
    name: string,
    createdDate?: number,
    value: string,
    dioptria?: {
        right: string,
        left: string,
    },
}

type DataProps = {
    lastUpdated: number | null,
    pedidos: Pedido[],
}

const data: DataProps = {
    lastUpdated: Date.now(),
    pedidos: [
        {
            id: 2,
            createdDate: 1689201196748,
            name: "yuri",
            value: "124"
        },
        {
            id: 3,
            createdDate: 1689201213351,
            name: "erica",
            value: "233"
        }
    ],
}

export function GET() {
    return NextResponse.json(data)
}

export async function POST(request: NextRequest) {
    const body = await request.json()

    data.pedidos.push({
        id: ++lastId,
        createdDate: Date.now(),
        ...body
    })

    data.lastUpdated = Date.now()

    return NextResponse.json(data)
}
