import { css } from "@emotion/css";
import { ItemsProps } from "./ItemsProps";

export function TravelCourseItems(props: ItemsProps) {

    return (
        <>
            { props.items.map((data: any, index: number) => (
                <div
                    key={data.index}
                    className={css`
                        width: 170px;
                        height: 40px;
                        box-shadow: 1px 1px 3px 1px #dadce0;
                        background-color: white;
                        margin-top: 40px;
                        margin-left: 16px;
                        text-align: center;
                        font-family: Freesentation-9Black;
                    `}>
                    {data.title}
                </div>
            ))}
        </>
    )
}