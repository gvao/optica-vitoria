'use client'

import { MouseEventHandler, ReactNode } from "react";
import styles from "./styles.module.css"
import { Container } from "../container";
import { usePathname, useRouter } from "next/navigation";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { Button } from "../button";
import { Link } from "../link";

export const Root = ({ children }: { children: ReactNode }) => {

    const { push } = useRouter()
    const pathName = usePathname()

    const closePopup = () => push(pathName)

    const onclick: MouseEventHandler<HTMLDivElement> = (event) => {
        const target = event.target as Element

        const hasClassToClosePopup = target.classList.contains(styles.popupWrap)

        if (hasClassToClosePopup) closePopup()
    }

    return (
        <div
            className={styles.popupWrap}
            onClick={onclick}
        >

            <Container className={styles.popup}>

                <Link href={pathName}>
                    <XMarkIcon width={30} className={styles.closePopup} onClick={closePopup} />
                </Link>
                
                {children}
            </Container>

        </div>
    )
}