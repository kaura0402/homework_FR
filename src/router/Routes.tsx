import {createBrowserRouter} from "react-router-dom";
import {JSX} from "react";
import {UsersPage} from "../pages/UsersPage.tsx";
import {HomePage} from "../pages/HomePage.tsx";
import {MainLayout} from "../layout/MainLayout.tsx";

export  const routes = createBrowserRouter([
    {
        path: '/', element: <MainLayout/>, children:[
            {index: true, element: <HomePage/>},
            {path: 'users', element: <UsersPage/>},
    ]}
])