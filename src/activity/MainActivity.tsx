import { css } from "@emotion/css";
import { ChangeEvent, useEffect } from "react";
import { _type, level, load, travelCourseItems } from "../const";
import { Horizontal } from "../ui-kit/styled/Horizontal";
import { TravelCourseItems } from "../components/items/TravelCourseItems";
import { travelStore } from "../entities/travel";
import { Header } from "../components/header";
import { stateStore } from "../entities/state";
import { InitDialog } from "../components/dialog";

export function MainActivity() {
    const { items, setGpxPath } = travelStore();
    const { open, setOpen, setLevel, setLoad } = stateStore();

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

                if (markersLat.length !== markersLng.length) {
                    console.error("Latitude and Longitude arrays do not match in length");
                    return;
                }

                const path = markersLat.map((lat, index) => {
                    if (lat == null || markersLng[index] == null) {
                        console.error("Invalid latitude or longitude at index", index);
                        return null;
                    }
                    return new kakao.maps.LatLng(lat, markersLng[index]);
                }).filter(Boolean);

                const lastIndex = path.length - 1;

                if (!(path[0] instanceof kakao.maps.LatLng) || !(path[lastIndex] instanceof kakao.maps.LatLng)) {
                    console.error("Invalid LatLng object at path[0]");
                    return;
                }

                const startPosition = new kakao.maps.LatLng(path[0].getLat(), path[0].getLng());

                const alivePosition = new kakao.maps.LatLng(path[lastIndex].getLat(), path[lastIndex].getLng());

                const newPolyline = new kakao.maps.Polyline({
                    map: map,
                    path: path,
                    strokeWeight: 6,
                    strokeColor: '#0080ff',
                    strokeOpacity: 0.7,
                    strokeStyle: 'solid'
                });

                const startMarker = new kakao.maps.Marker({
                    position: startPosition,
                    map: map
                });

                const aliveMarker = new kakao.maps.Marker({
                    position: alivePosition,
                    map: map
                });

                newPolyline.setMap(map);
                startMarker.setMap(map);
                map.setCenter(startPosition);
                aliveMarker.setMap(map);
            };

            kakao.maps.event.addListener(map, 'tilesloaded', addMarker);
        }
    }, [travelStore.getState()]);

    const setState = (gpxpath: string) => {
        setOpen(true);
        setGpxPath(gpxpath);
    }; 

    const onChange = (event: ChangeEvent<HTMLSelectElement>, key: string) => {

        if (key === "난이도") {
            const values = (() => {
                switch(event.target.value) {
                    case "하": return 1
                    case "중": return 2
                    case "상": return 3
                }
            })();

            setLevel(values!);
        }
        else if (key === "길") {
            const values = (() => {
                switch(event.target.value) {
                    case "걷기"  : return "DNWW"
                    case "자전거": return "DNBW" 
                }
            })();

            setLoad(values!);
        }
    };

    return (
        <>
            <Header />
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

                <Horizontal notScroll="yes">
                    <h2 className={css`
                        font-family: 'yg-jalnan';
                        text-align: left;
                        margin-top: 40px;
                    `}>원하는 여행 코스를 검색하세요! 🤭</h2>

                    <TravelCourseItems items={travelCourseItems} />
                </Horizontal>

                <select className={css`
                    width: 360px;
                    height: 40px;
                    margin-top: 24px;
                    padding-left: 8px;
                `} onChange={(level) => onChange(level, "난이도")}>
                    { level.map((data: any, index: number) => (
                        <option key={index} value={data}>{data}</option>
                    ))}
                </select>

                <select className={css`
                    width: 360px;
                    height: 40px;
                    padding-left: 8px;
                    margin-top: 24px;
                    margin-left: 16px;
                `} onChange={(load) => onChange(load, "길")}>
                    { load.map((data: any, index: number) => (
                        <option key={index}>{data}</option>
                    ))}
                </select>

                <div className={css`
                    display: grid;
                    grid-template-columns: repeat(5, 1fr);
                `}>
                    {items && items.map((data: any, index: number) => (
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
                            onClick={() => setState(data.gpxpath)}>
                            <p key={index}>{data.crsKorNm}</p>
                            <p>{data.sigun}</p>
                        </div>
                    ))}
                </div>
            </div>

            {open && <InitDialog open={open} setOpen={setOpen} />}
        </>
    );
}