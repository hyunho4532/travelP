import { css } from "@emotion/css";
import { categoryHeaderItems } from "../../const";
import { openStore } from "../../entities/state";
import { useNavigate } from "react-router-dom";
import { moveScale } from "../../hooks/animation";
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';

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
        });
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
                    {categoryHeaderItems.map((data: any, key: number) => (
                        key === 4 && email != null ? (
                            <Popover key={key} className={css`padding-left: 24px;`}>
                                <PopoverButton className={css`
                                    font-family: 'yg-jalnan';
                                    cursor: pointer;
                                `}>
                                    {email}
                                </PopoverButton>
                                <PopoverPanel className={css`
                                    position: absolute;
                                    z-index: 10;
                                    background-color: white;
                                    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
                                    border-radius: 8px;
                                    padding: 16px;
                                `}>
                                    <p className={css`cursor: pointer;`}>등록한 관광지 조회</p>
                                    <p className={css`cursor: pointer;`}>등록한 여행 코스 조회</p>
                                </PopoverPanel>
                            </Popover>
                        ) : (
                            <p key={key}
                               className={css`
                                    padding-left: 24px;
                                    font-family: 'yg-jalnan';
                                    cursor: pointer;
                               `}
                               onClick={() => headerItemClick(key)}
                               onMouseEnter={onMouseEnter}
                               onMouseLeave={onMouseLeave}>
                                {key !== 4 && data.title !== "로그인" ? data.title : email != null ? email : data.title}
                            </p>
                        )
                    ))}
                </div>
            </div>
        </header>
    )
}