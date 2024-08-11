import { css } from "@emotion/css";
import gsap from "gsap";
import { useLayoutEffect } from "react";

export function IntroduceActivity() {

    useLayoutEffect(() => {
        gsap.fromTo("#title", {
            opacity: 0
        }, {
            opacity: 1,
            duration: 1
        });

        gsap.to("#subTitle", { y: 100, duration: 1, delay: 2 });

    }, []);

    return (
        <>
            <div className={css`
                display: flex;
                flex-direction: column;
                align-items: center;
                text-align: center;
            `}>
                <span className={css`
                    font-family: 'yg-jalnan';
                    font-size: 26px;
                    margin-top: 60px;
                `} id="title">
                    여킴이에 오신 것을 진심으로 환영합니다.
                </span>

                <span className={css`
                    margin-top: 20px;
                `} id="subTitle">
                    여행에 관한 것을 여킴이에게 맡겨보세요.
                </span>
            </div>
        </>
    )
}