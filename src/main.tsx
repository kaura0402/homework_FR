import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {JSX} from "react";
import {HomePage} from "./pages/HomePage.tsx";
import MainLayout from "./layouts/MainLayout.tsx";
import {Comments} from "./pages/Comments.tsx";
import {Users} from "./pages/Users.tsx";
import {Posts} from "./pages/Posts.tsx";


const routers = createBrowserRouter([
    {path: '/', element: <MainLayout/>,
        children:[
            {path:'', element: <HomePage/>},
            {path:'users', element:<Users/>,
            children:[
                {path:'jsonplaceholder', element:<div>JSONPlaceholder Users</div>},
                {path:'dummyjson', element:<div>DummyJSON Users</div>},
            ]},
            {path:'posts', element:<Posts/>, children:[
                    {path:'jsonplaceholder', element:<div>JSONPlaceholder Posts</div>},
                    {path:'dummyjson', element:<div>DummyJSON Posts</div>},
                ]},
            {path:'comments', element:<Comments/>, children:[
                    {path:'jsonplaceholder', element:<div>JSONPlaceholder Comments</div>},]},
            ]

        },]);
createRoot(document.getElementById('root')!)
    .render(<RouterProvider router={routers}/>  )
