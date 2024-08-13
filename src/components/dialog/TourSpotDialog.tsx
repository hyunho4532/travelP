import { css } from "@emotion/css";
import { useEffect, useRef } from "react";
import { tourSpotStore } from "../../entities/travel";

export function TourSpotDialog({ open }: any) {
    const dialogRef = useRef<HTMLDialogElement>(null);
    const mapRef = useRef<HTMLDivElement>(null);
    const { spot, mapLocation } = tourSpotStore();

    useEffect(() => {
        const dialog = dialogRef.current;

        if (open) {
            dialog?.showModal();

            if (mapRef.current) {
                const options = {
                    center: new kakao.maps.LatLng(33.450701, 126.570667),
                    level: 3
                };

                const markers = new kakao.maps.Marker({
                    position: new kakao.maps.LatLng(mapLocation[1], mapLocation[0])
                })

                const position = new kakao.maps.LatLng(mapLocation[1], mapLocation[0]);

                const map = new kakao.maps.Map(mapRef.current, options);
                markers.setMap(map);
                map.setCenter(position);
            }
        } else {
            dialog?.close();
        }
    }, [open]);

    return (
        <>
            <dialog 
                className={css`
                    width: 460px;
                    height: 600px;
                `} ref={dialogRef}>
                
                <h2 className={css`
                    font-family: PTAnboR;
                    text-align: center;
                `}>관광지 조회</h2>

                <p className={css`
                    margin-top: 24px;
                    font-weight: bold;    
                `}>{spot}</p>

                <div id="map" ref={mapRef} className={css`
                    width: 100%;
                    height: 400px;
                    margin-top: 32px;
                `}>
                </div>

            </dialog>
        </>
    )
}
