import { css } from "@emotion/css";
import { useEffect, useRef } from "react"
import { login } from "../../const";
import { supabase } from "../../config";

export function LoginDialog({ open }: any) {

    const dialogRef = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        const dialog = dialogRef.current

        if (open) {
            dialog?.showModal();
        }

    }, [open])

    const loginClick = async () => {
        supabase.auth.signInWithOAuth({
            provider: "google",
            options: {
                queryParams: {
                    access_type: "offline",
                    prompt: "consent"
                }
            }
        });
    };

    return (
        <>
            <dialog 
                className={css`
                    width: 460px;
                    height: 360px; 
                `} ref={dialogRef}>
                
                <h2 className={css`
                    font-family: PTAnboR;
                    text-align: center;
                `}>안녕하세요. 반갑습니다.</h2>

                <p className={css`
                    text-align: center;
                    font-size: 18px;
                    font-weight: bold;
                `}>
                    원하시는 로그인으로 진행해주세요!
                </p>

                <div className={css`
                    display: flex;
                    justify-content: space-around;
                    margin-top: 60px;
                `}>
                    { login.map((value: any, key: number) => (
                        <img key={key} className={css`
                            cursor: pointer;  
                        `} src={value} width={80} height={80} onClick={loginClick} />
                    ))}
                </div>

            </dialog>
        </>
    )
}