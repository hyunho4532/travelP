import { css } from "@emotion/css";
import { Header } from "../components/header";
import { useEffect, useState } from "react";
import { supabase } from "../config";
import { userStore } from "../entities/user";
import { UserSpotItems } from "../components/items/UserSpotItems";

export function ScheduleActivity() {

    const [tourSpots, setTourSpots] = useState<any[]>([]);
    const { email } = userStore();

    const getTourSpots = async () => {
        const { error, data } = await supabase.from('tourspots').select().eq('isspots', true);

        if (error) {
            alert("조회 중 에러 발생")
        }

        if (data) {
            setTourSpots(data);
        }
    }

    useEffect(() => {
        const container = document.getElementById('map');

        const options = {
            center: new kakao.maps.LatLng(36.598651942531525, 127.87469221278923),
            level: 12
        };

        const map = new kakao.maps.Map(container!, options);

        tourSpots.forEach(tourSpot => {

            const markerPosition = new kakao.maps.LatLng(tourSpot.mapx, tourSpot.mapy);

            const marker = new kakao.maps.Marker({
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
                

                <h2 className={css`
                    font-family: 'yg-jalnan';
                    text-align: left;
                    margin-top: 80px;  
                    `}>사람들은 어디로 여행을 떠날까요? 😎</h2>

                <div className={css`
                    display: grid;
                    grid-template-columns: repeat(5, 1fr);
                `}>
                    <UserSpotItems items={tourSpots} />
                </div>

            </div>
        </>
    )
}