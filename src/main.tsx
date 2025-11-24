import { createRoot } from 'react-dom/client'
import './index.css'
import {routes} from "./router/Routes.tsx";
import {RouterProvider} from "react-router-dom";
import {JSX} from "react";

createRoot(document.getElementById('root')!)
    .render(<RouterProvider router={routes}/>)
