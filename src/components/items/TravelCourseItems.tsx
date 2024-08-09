import { css } from "@emotion/css";
import { ItemsProps } from "./ItemsProps";
import { travelStore } from "../../entities/travel";
import { instance } from "../../interceptor";
import { _type, crsKorNm, mobileApp, mobileOS, serviceKey } from "../../const";

export function TravelCourseItems(props: ItemsProps) {

    const { setItems } = travelStore();
    
    const travelCourseItemClick = async (key: number) => {
        try {
            const response = await instance.get (
                `/courseList?MobileOS=${mobileOS}&MobileApp=${mobileApp}&serviceKey=${serviceKey}&crsKorNm=${crsKorNm(key)}&_type=${_type}`
            );
            setItems(response.data.response.body.items.item);

        } catch (error) {
            console.error(error);
        }
    };
    
    return (
        <>
            {props.items.map((data: any, index: number) => (
                <div
                    key={index}
                    className={css`
                        width: 170px;
                        height: 40px;
                        box-shadow: 1px 1px 3px 1px #dadce0;
                        background-color: white;
                        cursor: pointer;
                        margin-top: 40px;
                        margin-left: 16px;
                        text-align: center;
                        font-family: Freesentation-9Black;
                    `}
                    onClick={() => travelCourseItemClick(data.key)}>
                    <p>{data.title}</p>
                </div>
            ))}
        </>
    );
}