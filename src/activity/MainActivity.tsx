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
        <div className={css`
            width: 1200px;
            margin: 0 auto;
        `}>
            <div id="map" className={css`
                width: 100%;
                height: 520px;
                margin-top: 32px;
            `} />

            <h2 className={css`
                font-family: 'yg-jalnan';
                text-align: left;
                margin-top: 40px;
            `}>요즘 유행하고 있는 여행 코스 😎</h2>
        </div>
    )
}