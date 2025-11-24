import {Link, Outlet} from "react-router-dom";
import {PostJsonplaceholderPage} from "./page/PostJsonplaceholderPage.tsx";
import {PostDummyjsonPage} from "./page/PostDummyjsonPage.tsx";

export const PostsPage = () => {
    return (
        <div>
            <ul>
                <li><Link to={'jsonplaceholder'}><PostJsonplaceholderPage/></Link></li>
                <li><Link to={'dummyjson'}><PostDummyjsonPage/></Link></li>
            </ul>
            <hr/>
            <Outlet/>
        </div>
    );
};
