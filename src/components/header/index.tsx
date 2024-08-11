import { css } from "@emotion/css";
import { categoryHeaderItems } from "../../const";
import { openStore } from "../../entities/state";

export function Header({ email }: any) {

    const { setLoginOpen } = openStore();

    const headerItemClick = (key: number) => {
        switch (key) {
            case 3: {
                setLoginOpen(true);
            }
        }
    }

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

                    <p>{email}</p>

                    { categoryHeaderItems.map((data: any, key: number) => (
                        <p key={key}
                           className={css`
                                padding-left: 24px;
                                font-family: 'yg-jalnan';
                                cursor: pointer;
                        `} onClick={() => headerItemClick(key)}>{data.title}</p>
                    ))}
                </div>
            </div>
        </header>
    )
}