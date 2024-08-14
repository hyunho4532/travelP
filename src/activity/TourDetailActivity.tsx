import { css } from "@emotion/css";
import { Horizontal } from "../ui-kit/styled/Horizontal";
import { useMemo, useState } from "react";
import { supabase } from "../config";
import { DetailTourSpotItems } from "../components/items/DetailTourSpotItems";

export function TourDetailActivity() {

    const [tourSpots, setTourSpots] = useState<any[]>([]);

    useMemo(async () => {
        const { data } = await supabase.auth.getUser();

        const { data: spots } = await supabase
            .from('tourspots')
            .select()
            .eq('email', data.user?.email);

        setTourSpots(spots!);

    }, [tourSpots]);

    return (
        <>
            <div className={css`
                width: 1200px;
                margin: 0 auto;
            `}>
                <h2 className={css`
                    font-family: 'yg-jalnan';
                    text-align: left;
                    margin-top: 40px;
                `}>등록한 관광지들을 조회해볼게요! 🤭</h2>

                <Horizontal notScroll="yes">
                    <DetailTourSpotItems tourSpot={tourSpots} />
                </Horizontal>
            </div>
        </>
    )
}