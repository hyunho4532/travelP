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

        gsap.to("#subTitle", { y: 40, duration: 1, delay: 1 });

        gsap.fromTo("#travelCourse", {
            opacity: 0
        }, {
            opacity: 1,
            duration: 1,
            delay: 2
        });

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
                    font-size: 18px;
                    font-family: PTAnboR;
                `} id="subTitle">
                    여행에 관한 것을 여킴이에게 맡겨보세요.
                </span>

                <div className={css`
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    text-align: center;
                `} id="travelCourse">
                    <img src="src\assets\travel_course.svg" width={520} height={520} />
                    <div className={css`
                        display: flex;
                        flex-direction: column;
                    `}>
                        <span className={css`
                            font-weight: bold;
                            font-size: 22px;
                            padding-left: 30px;
                            color: #45B1E8;
                        `}>여행 코스</span>

                        <span className={css`
                            font-size: 14px;
                            font-weight: bold;
                            margin-top: 16px;
                            padding-left: 30px;
                        `}>
                            1. 더 효율적이고 재밌는 여행을 하기 위해.
                        </span>
                    </div>
                </div>
            </div>
        
        </>
    )
}