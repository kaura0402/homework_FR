import { App } from "../App";
import { CarsPage } from "../pages/CarsPage";
import { CreateCarPage } from "../pages/CreateCarPage";
import { HomePage } from "../pages/HomePage";
import { createBrowserRouter } from "react-router";

export const routes = createBrowserRouter([
    {
        path: "/", element: <App />, children: [
            { index: true, element: <HomePage /> },
            {path: "/cars", element: <CarsPage />},
            {path: "/cars/create", element: <CreateCarPage/>}
    ]},
]);
