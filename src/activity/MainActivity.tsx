import { css } from "@emotion/css";
import { useEffect } from "react";

export function MainActivity() {

    useEffect(() => {
        const container = document.getElementById('map');

        if (container) {
            const options = {
                center: new kakao.maps.LatLng(33.450701, 126.570667),
                level: 3
            };

            new kakao.maps.Map(container!, options);
        }
    });

    return (
        <>
            <div id="map" className={css`
                width: 1200px;
                height: 600px;
            `}>

            </div>
        </>
    )
}