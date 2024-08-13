import { css } from "@emotion/css";

export interface ItemsProps {
    items: any
}

export function UserSpotItems(props: ItemsProps) {

    console.log(props.items);

    return (
        <>
            {props.items.map((data: any, index: number) => (
                <div
                    key={index}
                    className={css`
                        width: 220px;
                        height: 80px;
                        box-shadow: 1px 1px 3px 1px #dadce0;
                        background-color: white;
                        cursor: pointer;
                        margin-top: 16px;
                        text-align: center;
                        font-family: Freesentation-9Black;
                    `}>
                    <p>{data.name}</p>
                </div>
            ))}
        </>
    );
}