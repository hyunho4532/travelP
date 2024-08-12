import { css } from "@emotion/css";
import { useEffect, useRef } from "react"
import { travelStore } from "../../entities/travel";

export function InitDialog({ open, setOpen }: any) {

    const { gpxPath, setMarkers } = travelStore();
    const dialogRef = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        const dialog = dialogRef.current;

        if (open) {
            dialog?.showModal();
        } else {
            dialog?.close();
        }
    }, [open])

    const dialogInsert = async () => {
        const url = new URL('http://localhost:3000/api');
        url.searchParams.append('gpxpath', gpxPath);

        const response = await fetch(url.toString());
        const xmlText = await response.text();

        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlText, "application/xml");

        const trkpt = xmlDoc.getElementsByTagName('trkpt');

        for (let i = 0; i < trkpt.length; i++) {
            setMarkers(parseFloat(trkpt[i].getAttribute('lat')!), parseFloat(trkpt[i].getAttribute('lon')!));
        }
    }

    const dialogClose = () => {
        setOpen(false);
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
                        margin-top: 26px;
                    `} onClick={dialogInsert}>
                        코스 등록 완료!
                    </button>

                    <button className={css`
                        width: 440px;
                        height: 50px;
                        display: inline-block;
                        background-color: #e06666;
                        color: white;
                        font-family: PTAnboR;
                        margin-top: 26px;
                    `} onClick={dialogClose}>
                        코스 등록 취소!
                    </button>
                </div>
            </dialog>
        </>
    )
}