import NextLink from "next/link"

import { LinkProps } from "./types"
import styles from "./styles.module.css"

export const Link = ({ children, href, className, ...props }: LinkProps) => (
    <NextLink
        href={href}
        className={`${styles.link} ${className}`}
        {...props}
    >
        {children}
    </NextLink>
)