import {createBrowserRouter} from "react-router-dom";
import {PaginationLayout} from "../layouts/PaginationLayout.tsx";
import {JSX} from "react";
import {UsersPage} from "../pages/UsersPage.tsx";
import MainLayout from "../layouts/MainLayout.tsx";
import {HomePage} from "../pages/HomePage.tsx";

export const router = createBrowserRouter([
    {
        path: '/', element: <MainLayout/>, children: [
            {
                path: '', element: <PaginationLayout/>,
                children: [
                    {path: '', element: <HomePage/>},
                    {path: 'users', element: <UsersPage/>}
                ]
            },
        ],
    }
]);
