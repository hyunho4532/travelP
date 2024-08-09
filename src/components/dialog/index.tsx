import { css } from "@emotion/css";
import { useRef } from "react"

export function InitDialog({ open, setOpen }: any) {

    const dialogRef = useRef<HTMLDialogElement>(null);

    const dialog = dialogRef.current;

    if (open) {
        dialog?.showModal();
    }

    const dialogClose = () => {
        setOpen(false);
        dialog?.close();
    }

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
                `}>여행 코스 등록하기</h2>

                <div
                    className={css`
                        text-align: center;
                    `}>
                    <button className={css`
                        width: 440px;
                        height: 50px;
                        display: inline-block;
                        background-color: #45B1E8;
                        color: white;
                        font-family: PTAnboR;
                    `} onClick={dialogClose}>
                        코스 등록 완료!
                    </button>
                </div>
            </dialog>
        </>
    )
}