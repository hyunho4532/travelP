import { css } from "@emotion/css";
import { Header } from "../components/header";
import { userStore } from "../entities/user";

export function TourActivity() {

    const { email } = userStore(); 

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
                        margin-top: 120px;  
                    `}>이런 관광지는 어떠신가요? 😎</h2>

                </div>
            </div>
        </>
    )
}