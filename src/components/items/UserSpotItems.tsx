import { css } from "@emotion/css";

export interface ItemsProps {
    items: any
}

export function UserSpotItems(props: ItemsProps) {

    const cheering = () => {
        alert("응원하기 기능 구현 중")
    }

    return (
        <>
            {props.items.map((data: any, index: number) => (
                <div
                    key={index}
                    className={css`
                        width: 220px;
                        height: 100px;
                        box-shadow: 1px 1px 3px 1px #dadce0;
                        background-color: white;
                        cursor: pointer;
                        margin-top: 16px;
                        text-align: center;
                        font-family: Freesentation-9Black;
                    `}>
                    <p>{data.name}</p>

                    <div className={css`
                        display: flex;
                        justify-content: space-between; 
                    `}>
                        <p className={css`
                            padding-left: 8px;
                        `} onClick={() => cheering()}>응원하기</p>

                        <p className={css`
                            padding-right: 8px;
                        `}>여행자: {data.author}</p>
                    </div>
                </div>
            ))}
        </>
    );
}