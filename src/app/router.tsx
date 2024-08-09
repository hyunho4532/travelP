import { createBrowserRouter } from "react-router-dom";
import { MainActivity } from "../activity/MainActivity";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainActivity />
    }
])