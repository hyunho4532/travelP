import { css } from "@emotion/css";
import { supabase } from "../../config";

export interface ItemsProps {
    items: any
}

export function UserSpotItems(props: ItemsProps) {

    const cheering = async (email: string) => {
        const response = await supabase.auth.getUser();
    
        const { error } = await supabase
            .from('notification')
            .insert([{ 
                from: response.data.user?.email,
                to: email,
                message: `${response.data.user?.user_metadata.name}님이 응원 메시지를 보냈습니다.`
            }]);

        if (error) {
            alert("등록 중 에러가 발생했어요" + error.message);
        }
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
                    <p className={css`
                        visibility: hidden;
                        font-size: 0px;
                    `}>{data.email}</p>

                    <div className={css`
                        display: flex;
                        justify-content: space-between; 
                    `}>
                        <p className={css`
                            padding-left: 8px;
                        `} onClick={() => cheering(data.email)}>응원하기</p>

                        <p className={css`
                            padding-right: 8px;
                        `}>여행자: {data.author}</p>
                    </div>
                </div>
            ))}
        </>
    );
}