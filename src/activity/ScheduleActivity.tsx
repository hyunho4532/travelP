import { css } from "@emotion/css";
import { Header } from "../components/header";
import { useEffect, useState } from "react";
import { supabase } from "../config";
import { userStore } from "../entities/user";

export function ScheduleActivity() {

    const [tourSpots, setTourSpots] = useState<any[]>([]);
    const { email } = userStore();

    const getTourSpots = async () => {
        const { error, data } = await supabase.from('tourspots').select();

        if (error) {
            alert("조회 중 에러 발생")
        }

        if (data) {
            setTourSpots(data);
        }
    }

    useEffect(() => {
        var container = document.getElementById('map');

        var options = {
            center: new kakao.maps.LatLng(36.598651942531525, 127.87469221278923),
            level: 12
        };

        const map = new kakao.maps.Map(container!, options);

        tourSpots.forEach(tourSpot => {

            var markerPosition = new kakao.maps.LatLng(tourSpot.mapx, tourSpot.mapy);

            var marker = new kakao.maps.Marker({
                position: markerPosition,
                map: map
            });

            marker.setMap(map);
        });
    })

    return (
        <>
            <Header email={email} />

            <div className={css`
                width: 1200px;
                margin: 0 auto;
            `}>
                <div id="map" className={css`
                    width: 100%;
                    height: 520px;
                    margin-top: 32px;
                `}>
                </div>

                <button className={css`
                    width: 1200px;
                    height: 50px;
                    margin-top: 36px;
                    background-color: #9db2fb;
                    font-weight: bold;
                    font-size: 18px;
                    color: white;
                    `} onClick={getTourSpots}>
                    등록한 관광지 조회하기
                </button>
            </div>
        </>
    )
}