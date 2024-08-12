import { css } from "@emotion/css";
import { categoryHeaderItems } from "../../const";
import { openStore } from "../../entities/state";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";

export function Header({ email }: any) {

    const { setLoginOpen } = openStore();
    const navigate = useNavigate();

    const headerItemClick = (key: number) => {
        switch (key) {
            case 0: {
                navigate("/introduce")
                break;
            }
            case 1: {
                navigate("/schedule")
                break;
            }
            case 2: {
                navigate("/tour")
                break;
            }
            case 3: {
                navigate("/course")
                break;
            }
            case 4: {
                setLoginOpen(true);
                break;
            }
        }
    }

    const onMouseEnter = (event: any) => {
        gsap.to(event.target, {
            scale: 1.3,
            duration: 0.5,
            ease: "power1.inOut"
        })
    }

    const onMouseLeave = (event: any) => {
        gsap.to(event.target, {
            scale: 1,
            duration: 0.5,
            ease: "power1.inOut"
        })
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
                `} src="https://travelp.vercel.app/logo.jpg" width={120} height={120} />

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
                        onClick={() => headerItemClick(key)}
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}>
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