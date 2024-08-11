import { createBrowserRouter } from "react-router-dom";
import { MainActivity } from "../activity/MainActivity";
import { IntroduceActivity } from "../activity/IntroduceActivity";
import { TourActivity } from "../activity/TourActivity";

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
    }
])