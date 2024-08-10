import { css } from "@emotion/css";
import { useEffect, useRef } from "react"

export function LoginDialog({ open }: any) {

    const dialogRef = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        const dialog = dialogRef.current
        
        if (open) {
            dialog?.showModal();
        }
    }, [open])

    return (
        <>
            <dialog 
                className={css`
                    width: 460px;
                    height: 360px; 
                `} ref={dialogRef}>
                
                <h2 className={css`
                    font-family: PTAnboR;
                    text-align: center;
                `}>안녕하세요. 반갑습니다.</h2>
            </dialog>
        </>
    )
}