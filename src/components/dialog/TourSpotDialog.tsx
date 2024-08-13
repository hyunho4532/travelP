import { css } from "@emotion/css";
import { useEffect, useRef } from "react"
import { tourSpotStore } from "../../entities/travel";

export function TourSpotDialog({ open }: any) {

    const dialogRef = useRef<HTMLDialogElement>(null);
    const { spot } = tourSpotStore();

    useEffect(() => {
        const dialog = dialogRef.current

        if (open) {
            dialog?.showModal();
        }
    }, [open]);

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
                `}>관광지 조회</h2>

                <p className={css`
                    margin-top: 24px;
                    font-weight: bold;    
                `}>{spot}</p>

            </dialog>
        </>
    )
}