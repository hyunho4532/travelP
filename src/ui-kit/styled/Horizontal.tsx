import { css } from "@emotion/css";

export function Horizontal({
    children,
    notScroll
}: {
    children: React.ReactNode
    notScroll: string
}) {
    return (
        <div className={css`
            overflow-x: ${notScroll === "yes" ? "" : "scroll"};
            display: flex;
            gap: 10px;
        `}>
            {children}
        </div>
    )
}