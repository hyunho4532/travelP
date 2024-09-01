import { css } from "@emotion/css"
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react"
import { moveRouter } from "../../hooks/router"

export const UserPopover = ({ key, email, navigate}: {key: any, email: any, navigate: any}) => {
    return (
        <Popover key={key} className={css`
            padding-left: 24px;
        `}>
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
                <p className={css`
                    cursor: pointer;
                    font-family: GangwonEduPowerExtraBoldA;
                `} onClick={() => moveRouter(5, '', navigate)}>등록한 관광지 조회</p>
                <p className={css`
                    cursor: pointer;
                    font-family: GangwonEduPowerExtraBoldA;
                `}>등록한 여행 코스 조회</p>
            </PopoverPanel>
        </Popover>
    )
}