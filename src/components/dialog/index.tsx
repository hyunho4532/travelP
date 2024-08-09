import { css } from "@emotion/css";
import { useEffect, useRef } from "react"

export function InitDialog({ open, setOpen }: any) {

    const dialogRef = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        const dialog = dialogRef.current;

        if (open) {
            dialog?.showModal();
        } else {
            dialog?.close();
        }
    }, [open]);

    const handleClickOutside = (event: MouseEvent) => {
        const dialog = dialogRef.current;
        if (dialog && !dialog.contains(event.target as Node)) {
            setOpen(false);
        }
    };

    return (
        <>
            <dialog
                className={css`
                    width: 460px;
                    height: 360px;  
                `}
                ref={dialogRef}
                onClose={() => handleClickOutside}>
                <h2>여행 코스 등록하기</h2>
            </dialog>
        </>
    )
}