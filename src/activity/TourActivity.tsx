import { css } from "@emotion/css";
import { Header } from "../components/header";
import { userStore } from "../entities/user";
import { ChangeEvent, useMemo, useState } from "react";
import { setInterceptors } from "../interceptor";
import { TourPictureStore, tourSpotStore } from "../entities/travel";
import { contentType, keywords, serviceKey } from "../const";
import { Swiper, SwiperSlide } from 'swiper/react';
import {  ClipLoader } from 'react-spinners'
import { TourSpotDialog } from "../components/dialog/TourSpotDialog";

export function TourActivity() {

    const { tourSpotItems, spot, _contentType, setTourSpotItems, setSpot, setContentType, setLocation } = tourSpotStore();
    const { tourPictureItems, setPictureItems } = TourPictureStore();
    const { email } = userStore();

    const [open, setOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(false);

    const tourSpotSelect = (spot: ChangeEvent<HTMLSelectElement>) => {
        setSpot(spot.target.value);
    }

    const onPageClick = async (page: number) => {
        setCurrentPage(page);
        await fetchTourSpots(page);
    }

    console.log(tourSpotItems);

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

    const tourSpotClick = (tourSpot: string, mapX: number, mapY: number) => {
        const tourSpotLocation = [mapX, mapY];

        setOpen(true);
        setSpot(tourSpot);
        setLocation(tourSpotLocation);
    }

    const fetchTourSpots = async (page: number = 1) => {
        try {
            const baseTourUrl = `/searchKeyword1?serviceKey=${serviceKey}&numOfRows=10&pageNo=${page}&MobileOS=ETC&MobileApp=AppTest&_type=json&listYN=Y&arrange=A&keyword=${spot}&contentTypeId=${_contentType != 0 ? _contentType : 12}`;

            const responseTour = await setInterceptors(2).get(baseTourUrl);

            setTourSpotItems(responseTour.data.response.body.items.item);

        } catch (error) {
            console.error(error);
        }
    };

    useMemo(async () => {
        const baseTourPictureUrl = '/galleryList1?serviceKey=ESun5Z0R0NacQfzLb0UEPB7j8XxI7tACyhwpT80fp%2FpDXspB2JKUjsrZh6DWJmSJvTlL9vKPkbJInjZtVHUXVw%3D%3D&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A&_type=json';
        const responseTourPicture = await setInterceptors(3).get(baseTourPictureUrl);
        
        if (responseTourPicture) {
            setPictureItems(responseTourPicture.data.response.body.items.item);
            setLoading(true)
        }
        
    }, [])

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
                    <h2 className={css`
                        font-family: 'yg-jalnan';
                        text-align: left;
                        margin-top: 80px;  
                    `}>멋진 사진들을 조회해봤어요! 😎</h2>

                    <div className={css`
                        display: flex;
                        text-align: center;
                    `}>

                        { loading ?
                            <Swiper
                                className={css`
                                    width: 1200px;
                                `}
                                spaceBetween={50}
                                slidesPerView={1}
                                onSlideChange={() => console.log('slide change')}
                                onSwiper={(swiper) => console.log(swiper)}>

                                { tourPictureItems.map((data: any, key: number) => (
                                    <SwiperSlide key={key} className={css`
                                        width: 960px;
                                        height: 570px;
                                    `}>
                                        <img src={data.galWebImageUrl} width={1160} height={520} />
                                        <p className={css`
                                            text-align: left;
                                            font-family: 'yg-jalnan';
                                            padding-left: 16px; 
                                        `}>{data.galPhotographyLocation} ● {data.galPhotographer}</p>
                                    </SwiperSlide>
                                ))}
                        </Swiper> : 
                        <ClipLoader className={css`
                            margin: 0 auto;
                        `} /> }
                    </div>

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
                        { tourSpotItems && tourSpotItems.map((data: any, key: number) => (
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
                            `} onClick={() => tourSpotClick(data.title, data.mapx, data.mapy)}>
                                <p>{data.title.length >= 13 ? `${data.title.substring(0, 13)}...` : data.title }</p>
                                <img src={data.firstimage != "" 
                                            ? data.firstimage : '../src/assets/not_image.png'} loading="lazy" width={180} height={160} />
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
                            visibility: ${currentPage <= 1 ? 'hidden' : 'visible' };   
                        `} onClick={() => onPageClick(currentPage - 1)}>이전</button>

                        <p>{currentPage}</p>

                        <button className={css`
                            margin-left: 16px;    
                            visibility: ${tourSpotItems.length <= 9 ? 'hidden' : 'visible'}
                        `} onClick={() => onPageClick(currentPage + 1)}>다음</button>
                    </div>
                </div>
            </div>

            { open && <TourSpotDialog open={open} /> }
        </>
    )
}