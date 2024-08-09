import { css } from "@emotion/css";
import { categoryHeaderItems } from "../../const";

export function Header() {
    return (
        <header className={css`
            width: 1200px;
            height: 70px;
            margin: 0 auto;
            margin-top: 8px;
        `}>
            <div className={css`
                display: flex;
                justify-content: space-between;
                align-items: center;
            `}>

                <img className={css`
                    align-items: start;
                `} src="src\assets\logo.jpg" width={120} height={120} />

                <div className={css`
                    display: flex;
                    justify-content: end;
                    align-items: center;
                `}>
                    { categoryHeaderItems.map((data: any, key: number) => (
                        <p key={key}
                           className={css`
                                padding-left: 24px;
                                font-family: 'yg-jalnan';
                        `}>{data.title}</p>
                    ))}
                </div>
            </div>
        </header>
    )
}