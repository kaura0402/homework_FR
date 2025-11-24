import {Link, Outlet} from "react-router-dom";
import {UserJsonplaceholderPage} from "./page/UserJsonplaceholderPage.tsx";
import {UserDummyjsonPage} from "./page/UserDummyjsonPage.tsx";

export const UsersPage = () => {
    return (
        <div>
            <ul>
                <li><Link to={'jsonplaceholder'}><UserJsonplaceholderPage/></Link></li>
                <li><Link to={'dummyjson'}><UserDummyjsonPage/></Link></li>
            </ul>
            <hr/>
            <Outlet/>
        </div>
    );
};
