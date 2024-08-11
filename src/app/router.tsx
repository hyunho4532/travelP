import { createBrowserRouter } from "react-router-dom";
import { MainActivity } from "../activity/MainActivity";
import { IntroduceActivity } from "../activity/IntroduceActivity";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainActivity />
    },
    {
        path: "/introduce",
        element: <IntroduceActivity />
    }
])