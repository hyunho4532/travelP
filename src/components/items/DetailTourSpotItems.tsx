import { css } from "@emotion/css";
import { _type } from "../../const";

export function DetailTourSpotItems(props: any) {

    console.log(props);

    return (
        <>
            {props.tourSpot.map((data: any, index: number) => (
                <div
                    key={index}
                    className={css`
                        width: 320px;
                        height: 160px;
                        box-shadow: 1px 1px 3px 1px #dadce0;
                        background-color: white;
                        cursor: pointer;
                        margin-top: 40px;
                        margin-left: 16px;
                        text-align: center;
                        font-family: Freesentation-9Black;
                    `}>
                    <p>{data.name}</p>
                    <p>{data.istravel}</p>
                </div>
            ))}
        </>
    );
}