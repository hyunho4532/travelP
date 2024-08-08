import { css } from "@emotion/css";

export function Container({children}: {children: React.ReactNode}) {
    return (
        <div className={css`
            display: flex;
            overflow-x: scroll;
            gap: 10px;
        `}>
            {children}
        </div>
    )
}