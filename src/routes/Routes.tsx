import {createBrowserRouter} from "react-router-dom";
import {JSX} from "react";
import {MainLayout} from "../layouts/MainLayout.tsx";
import {UsersPage} from "../pages/UsersPage.tsx";
import * as path from "node:path";
import {CartsPage} from "../pages/CartsPage.tsx";

export const routes = createBrowserRouter([
    {
        path:'/', element: <MainLayout/>,
        children:[
            {path: 'users', element: <UsersPage/>,
            children:[
                {path:':id/carts', element:<CartsPage/>}
            ]}
        ]
    }
])