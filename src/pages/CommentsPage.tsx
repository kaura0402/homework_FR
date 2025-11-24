import {Link, Outlet} from "react-router-dom";
import {CommentsJsonplaceholderPage} from "./page/CommentsJsonplaceholderPage.tsx";
import {CommentsDummyjsonPage} from "./page/CommentsDummyjsonPage.tsx";

export const CommentsPage = () => {
    return (
        <div>
            <ul>
                <li><Link to={'jsonplaceholder'}><CommentsJsonplaceholderPage/></Link></li>
                <li><Link to={'dummyjson'}><CommentsDummyjsonPage/></Link></li>
            </ul>
            <Outlet/>
        </div>
    );
};
