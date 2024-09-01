import { css } from "@emotion/css";
import { categoryHeaderItems } from "../../const";
import { openStore } from "../../entities/state";
import { useNavigate } from "react-router-dom";
import { onMouseEnter, onMouseLeave } from "../../hooks/animation";
import { moveRouter } from "../../hooks/router";
import { UserPopover } from "../popover";

export function Header({ email }: any) {
    const { setLoginOpen, setPopoverOpen } = openStore();
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
                if (email != null) {
                    setPopoverOpen(true);
                } else {
                    setLoginOpen(true);
                    break;
                }
            }
        }
    }

    const onMouseEnter = (event: any) => {
        moveScale({
            event: event,
            scale: 1.5,
            duration: 0.5,
            ease: "power1.out"
        });
    }

    const onMouseLeave = (event: any) => {
        moveScale({
            event: event,
            scale: 1,
            duration: 0.5,
            ease: "power1.inOut"
        })
    }

    const { setLoginOpen } = openStore();
    const navigate = useNavigate();

    return (
        <>  
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
                                { key != 4 ? data.title : email != null ? email : '로그인' }
                            </p>
                        ))}
                    </div>
                </div>
            </header>
        </>
    )
}