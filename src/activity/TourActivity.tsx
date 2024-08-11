import { css } from "@emotion/css";
import { Header } from "../components/header";
import { userStore } from "../entities/user";
import { ChangeEvent, useEffect, useState } from "react";
import { setInterceptors } from "../interceptor";
import { tourSpotStore } from "../entities/travel";
import { contentType, keywords, serviceKey } from "../const";
import { Pagination } from "flowbite-react";

export function TourActivity() {

    const { items, spot, _contentType, setItems, setSpot, setContentType } = tourSpotStore();
    const { email } = userStore();
    const [currentPage, setCurrentPage] = useState(1);

    const tourSpotSelect = (spot: ChangeEvent<HTMLSelectElement>) => {
        setSpot(spot.target.value);
    }

    const onPageClick = async (page: number) => {
        setCurrentPage(page);
        await fetchTourSpots(page);
    }

    const tourContentTypeSelect = (contentType: ChangeEvent<HTMLSelectElement>) => {
        const values = (() => {
            switch(contentType.target.value) {
                case "관광지": return 12
                case "문화시설": return 14
                case "축제공연행사": return 15
                case "여행코스": return 25
                case "레포츠": return 28
                case "숙박": return 32
                case "쇼핑": return 38
                case "음식점": return 39
            }
        })();

        setContentType(values!); 
    }

    const fetchTourSpots = async (page: number = 1) => {
        try {
            const baseUrl = `/searchKeyword1?serviceKey=${serviceKey}&numOfRows=10&pageNo=${page}&MobileOS=ETC&MobileApp=AppTest&_type=json&listYN=Y&arrange=A&keyword=${spot}&contentTypeId=${_contentType != 0 ? _contentType : 12}`;

            const response = await setInterceptors(2).get(baseUrl);
            setItems(response.data.response.body.items.item);

        } catch (error) {
            console.error(error);
        }
    };

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

                    <div className={css`
                        display: flex;    
                    `}>
                        <h2 className={css`
                            font-family: 'yg-jalnan';
                            text-align: left;
                            margin-top: 120px;  
                        `}>이런 관광지는 어떠신가요? 😎</h2>

                        <select className={css`
                            width: 220px;
                            height: 40px;
                            margin-top: 120px;
                            margin-left: 24px;
                            padding-left: 8px;
                            border-radius: 12px;
                        `} onChange={(spot) => tourSpotSelect(spot)}>
                            { keywords.map((data: any, index: number) => (
                                <option key={index}>{data.title}</option>
                            ))}
                        </select>

                        <select className={css`
                            width: 220px;
                            height: 40px;
                            margin-top: 120px;
                            margin-left: 24px;
                            padding-left: 8px;
                            border-radius: 12px;
                        `} onChange={(contentType) => tourContentTypeSelect(contentType)}>
                            { contentType.map((data: any, index: number) => (
                                <option key={index}>{data.title}</option>
                            ))}
                        </select>

                        <button className={css`
                            width: 280px;
                            height: 40px;
                            margin-top: 120px;
                            margin-left: 16px;
                            box-shadow: 1px 1px 3px 1px #dadce0;
                            font-weight: bold;
                        `} onClick={() => fetchTourSpots(currentPage)}>
                            조회하기
                        </button>

                    </div>

                    <div className={css`
                        display: grid;
                        grid-template-columns: repeat(5, 1fr); 
                    `}>
                        { items && items.map((data: any, key: number) => (
                            <div key={key} className={css`
                                width: 212px;
                                height: 240px;
                                box-shadow: 1px 1px 3px 1px #dadce0;
                                background-color: white;
                                cursor: pointer;
                                margin-top: 16px;
                                margin-left: 16px;
                                text-align: center;
                                font-family: Freesentation-9Black;
                            `}>
                                <p>{data.title.length >= 13 ? `${data.title.substring(0, 13)}...` : data.title }</p>
                                <img src={data.firstimage != "" ? data.firstimage : '../src/assets/not_image.png'} width={180} height={160} />
                            </div>
                        ))}
                    </div>

                    <div className={css`
                        display: flex;
                        justify-content: center;
                        margin-top: 24px; 
                    `}>
                        <button className={css`
                            margin-right: 16px;    
                        `} onClick={() => onPageClick(currentPage - 1)}>이전</button>

                        <p>{currentPage}</p>

                        <button className={css`
                            margin-left: 16px;    
                        `} onClick={() => onPageClick(currentPage + 1)}>다음</button>
                    </div>
                </div>
            </div>
        </>
    )
}