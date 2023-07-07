import { AnchorHTMLAttributes, ReactNode } from "react"

export type LinkProps = {
    children: ReactNode,
    href: string,
} & AnchorHTMLAttributes<HTMLAnchorElement>