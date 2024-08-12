import { Header } from "../components/header";
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import { css } from "@emotion/css";

export function ScheduleActivity() {

    return (
        <>
            <Header />

            <div className={css`
                width: 1200px;
                margin-top: 24px;
                margin: 60px auto 0;
            `}>
                 <FullCalendar
                    plugins={[dayGridPlugin]}
                    initialView="dayGridMonth"
                    weekends={true}
                />
            </div>
        </>
    )
}