import { createBrowserRouter } from "react-router-dom";
import { MainActivity } from "../activity/MainActivity";
import { IntroduceActivity } from "../activity/IntroduceActivity";
import { TourActivity } from "../activity/TourActivity";
import { ScheduleActivity } from "../activity/ScheduleActivity";
import { TourDetailActivity } from "../activity/TourDetailActivity";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainActivity />
    },
    {
        path: "/introduce",
        element: <IntroduceActivity />
    },
    {
        path: "/tour",
        element: <TourActivity />
    },
    {
        path: "/course",
        element: <MainActivity />
    },
    {
        path: "/schedule",
        element: <ScheduleActivity />
    },
    {
        path: "/detail/tour",
        element: <TourDetailActivity />
    }
])