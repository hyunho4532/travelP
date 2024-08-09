import { css } from "@emotion/css";
import { useEffect } from "react";
import { _type, travelCourseItems } from "../const";
import { Horizontal } from "../ui-kit/styled/Horizontal";
import { TravelCourseItems } from "../components/items/TravelCourseItems";
import { travelStore } from "../entities/travel";

export function MainActivity() {

    const { items } = travelStore();

    useEffect(() => {
        const container = document.getElementById('map');
        const position = new kakao.maps.LatLng(35.804329, 129.502485);

        const marker = new kakao.maps.Marker({
            position: position
        })

        if (container) {
            const options = {
                center: new kakao.maps.LatLng(33.450701, 126.570667),
                level: 3
            };

            const map = new kakao.maps.Map(container!, options);
            marker.setMap(map);
        }
    });

    const clickTest = async () => {
        const response = await fetch('https://www.durunubi.kr/editImgUp.do?filePath=/data/koreamobility/course/summap/T_CRS_MNG0000004239.gpx', {

        });
        const xmlText = await response.text();
        
        // XML 파싱
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlText, "application/xml");

        const trackPoints = xmlDoc.getElementsByTagName('trkpt');
        for (let i = 0; i < trackPoints.length; i++) {
            const lat = trackPoints[i].getAttribute('lat');
            const lon = trackPoints[i].getAttribute('lon');
            console.log(`Track Point ${i + 1}: Latitude: ${lat}, Longitude: ${lon}`);
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
                            onClick={() => clickTest()}>
                        <p key={index}>{data.crsKorNm}</p>

                        <p>{data.sigun}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}