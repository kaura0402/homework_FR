import {createBrowserRouter} from "react-router-dom";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {JSX} from "react";
import {Layout} from "../layouts/Layout.tsx";
import {HomePage} from "../pages/HomePage.tsx";
import {UsersPage} from "../pages/UsersPage.tsx";
import {PostsPage} from "../pages/PostsPage.tsx";
import {CommentsPage} from "../pages/CommentsPage.tsx";
import {UsersDummyjsonComponent} from "../components/dummyjsons_component/UsersDummyjsonComponent.tsx";
import {UsersJsonplaceholderComponent} from "../components/jsonplaceholders_component/UsersJsonplaceholderComponent.tsx";
import {PostsJsonplaceholderComponent} from "../components/jsonplaceholders_component/PostsJsonplaceholderComponent.tsx";
import {PostsDummyjsonComponent} from "../components/dummyjsons_component/PostsDummyjsonComponent.tsx";
import {CommentsJsonplaceholderComponent} from "../components/jsonplaceholders_component/CommentsJsonplaceholderComponent.tsx";
import {CommentsDummyjsonComponent} from "../components/dummyjsons_component/CommentsDummyjsonComponent.tsx";

export const routes = createBrowserRouter([

    {
        path: '/', element: <Layout/>, children: [
            {index: true, element: <HomePage/>},
            {path: 'users', element: <UsersPage/>,
                children:[
                    {path: 'jsonplaceholder', element:<UsersJsonplaceholderComponent/>},
                    {path: 'dummyjson', element: <UsersDummyjsonComponent/>},
                ]},
            {path: 'posts', element: <PostsPage/>,
                children:[
                    {path: 'jsonplaceholder', element:<PostsJsonplaceholderComponent/>},
                    {path: 'dummyjson', element: <PostsDummyjsonComponent/>},
                ]},
            {path: 'comments', element: <CommentsPage/>,
                children:[
                    {path: 'jsonplaceholder', element:<CommentsJsonplaceholderComponent/>},
                    {path: 'dummyjson', element: <CommentsDummyjsonComponent/>},
                ]
            }
        ]
    }
])