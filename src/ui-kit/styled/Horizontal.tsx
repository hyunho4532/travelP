import { css } from "@emotion/css";

export function Horizontal({children}: {children: React.ReactNode}) {
    return (
        <div className={css`
            display: flex;
        `}>
            {children}
        </div>
    )
}
