'use client'

import { MouseEventHandler, ReactNode } from "react";
import styles from "./styles.module.css"
import { Container } from "../container";
import { usePathname, useRouter } from "next/navigation";

export const Root = ({ children }: { children: ReactNode }) => {

    const { push } = useRouter()
    const pathName = usePathname()

    const onclick: MouseEventHandler<HTMLDivElement> = (event) => {
        const target = event.target as Element

        const hasClassToClosePopup = target.classList.contains(styles.popupWrap)

        if(hasClassToClosePopup) push(pathName)
    }

    return (
        <div
            className={styles.popupWrap}
            onClick={onclick}
        >

            <Container className={styles.popup}>
                {children}
            </Container>

        </div>
    )
}