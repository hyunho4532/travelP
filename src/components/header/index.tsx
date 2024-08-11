import { css } from "@emotion/css";
import { categoryHeaderItems } from "../../const";
import { openStore } from "../../entities/state";
import { useNavigate } from "react-router-dom";

export function Header({ email }: any) {

    const { setLoginOpen } = openStore();
    const navigate = useNavigate();

    const headerItemClick = (key: number) => {
        switch (key) {
            case 0: {
                navigate("/introduce")
                break;
            }
            case 3: {
                setLoginOpen(true);
                break;
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
                    { categoryHeaderItems.map((data: any, key: number) => (
                        <p key={key}
                           className={css`
                                padding-left: 24px;
                                font-family: 'yg-jalnan';
                                cursor: pointer;
                        `} 
                        onClick={() => headerItemClick(key)}>
                            { key != 4 && data.title != "로그인"
                                ? data.title : email != null 
                                ? email : data.title }
                        </p>
                    ))}
                </div>
            </div>
        </header>
    )
}