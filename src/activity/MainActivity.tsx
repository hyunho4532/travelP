import { css } from "@emotion/css";
import { useEffect, useMemo, useState } from "react";
import { instance } from "../interceptor";
import { _type, mobileApp, mobileOS, serviceKey } from "../const";
import { Input } from "@headlessui/react";
import { Horizontal } from "../ui-kit/styled/Horizontal";
import { TravelCourseItems } from "../components/items/TravelCourseItems";

export function MainActivity() {

    const [travelCourse, setTravelCourse] = useState([]);

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
    
    useMemo(async () => {
        try {
            const response = await instance.get(`/courseList?MobileOS=${mobileOS}&MobileApp=${mobileApp}&serviceKey=${serviceKey}&_type=${_type}`);
            setTravelCourse(response.data.response.body.items.item);
        } catch (error) {
            console.error(error);
        }
    }, []);

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

            <Horizontal>
                <h2 className={css`
                    font-family: 'yg-jalnan';
                    text-align: left;
                    margin-top: 40px;
                `}>원하는 여행 코스를 검색하세요! 🤭</h2>

                <TravelCourseItems />
            </Horizontal>

            { travelCourse && travelCourse.map((data: string, index: number) => (
                <p key={index}>{data.crsKorNm}</p>
            ))}
        </div>
    )
}