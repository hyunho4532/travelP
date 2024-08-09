import { css } from "@emotion/css";
import { useEffect } from "react";
import { _type, travelCourseItems } from "../const";
import { Horizontal } from "../ui-kit/styled/Horizontal";
import { TravelCourseItems } from "../components/items/TravelCourseItems";
import { travelStore } from "../entities/travel";

export function MainActivity() {

    const { items, setMarkers } = travelStore();

    useEffect(() => {
        const container = document.getElementById('map');

        if (container) {
            const options = {
                center: new kakao.maps.LatLng(33.450701, 126.570667),
                level: 6
            };

            const map = new kakao.maps.Map(container!, options);

            const addMarker = () => {
                const { markersLat, markersLng } = travelStore.getState();

                markersLat.pop();

                markersLat.forEach((lat, index) => {
                    const lng = markersLng[index];

                    new kakao.maps.Marker({
                        position: new kakao.maps.LatLng(lat, lng),
                        map: map
                    })
                })
            }
            
            addMarker();
        }
    });

    const clickTest = async (gpxpath: string) => {
        const url = new URL('http://localhost:3000/api');
        url.searchParams.append('gpxpath', gpxpath);

        const response = await fetch(url.toString());

        const xmlText = await response.text();

        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlText, "application/xml");

        const trkpt = xmlDoc.getElementsByTagName('trkpt');

        for (let i = 0; i < trkpt.length; i++) {
            setMarkers(parseFloat(trkpt[i].getAttribute('lat')), parseFloat(trkpt[i].getAttribute('lon')));
        }
    }

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

            <Horizontal notScroll="yes">
                <h2 className={css`
                    font-family: 'yg-jalnan';
                    text-align: left;
                    margin-top: 40px;
                `}>원하는 여행 코스를 검색하세요! 🤭</h2>

                <TravelCourseItems items={travelCourseItems} />
            </Horizontal>

            <div className={css`
                display: grid;
                grid-template-columns: repeat(5, 1fr);
            `}>
                { items && items.map((data: any, index: number) => (
                        <div
                            key={index}
                            className={css`
                                width: 200px;
                                height: 90px;
                                box-shadow: 1px 1px 3px 1px #dadce0;
                                background-color: white;
                                cursor: pointer;
                                margin-top: 40px;
                                margin-left: 14px;
                                text-align: center;
                                font-size: 15px;
                                font-family: Freesentation-9Black;
                            `}
                            onClick={() => clickTest(data.gpxpath)}>
                        <p key={index}>{data.crsKorNm}</p>

                        <p>{data.sigun}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}