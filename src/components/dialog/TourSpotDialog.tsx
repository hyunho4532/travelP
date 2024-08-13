import { css } from "@emotion/css";
import { useEffect, useRef } from "react";
import { tourSpotStore } from "../../entities/travel";
import { supabase } from "../../config";

export function TourSpotDialog({ open, setOpen }: any) {
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

    const tourSpotClick = async () => {

        const { data } = await supabase.from('tourspots').select();
        
        data!.forEach(async (tourSpot) => {
            if (tourSpot.name === spot) {
                alert("이미 존재하는 관광 요소입니다.")
            } else {
                const { error } = await supabase
                    .from('tourspots')
                    .insert({ name: spot, mapx: mapLocation[1], mapy: mapLocation[0] })

                if (error) {
                    alert("등록 중 에러가 발생했습니다.");
                }
            }
        });
    }

    const dialogClose = () => {
        setOpen(false);
    }

    return (
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

            <div className={css`
                text-align: center;
                margin-top: 24px;    
            `}>
                <button className={css`
                    width: 360px;
                    background-color: #9db2fb;
                    color: white;
                    font-weight: bold;
                `} onClick={() => tourSpotClick()}>
                    관광지 등록 완료
                </button>
            </div>

            <div className={css`
                text-align: center;
                margin-top: 12px;    
            `}>
                <button className={css`
                    width: 360px;
                    background-color: #d49e9d;
                    color: white;
                    font-weight: bold;
                `} onClick={() => dialogClose()}>
                    관광지 등록 취소
                </button>
            </div>
        </dialog>
    )
}