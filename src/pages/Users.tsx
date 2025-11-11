import {Link, Outlet} from "react-router-dom";

export const Users = () => {
    return (
        <div>
            <ul>
                <li><Link to={'jsonplaceholder'}>Users Jsonplaceholder</Link></li>
                <li><Link to={'dummyjson'}>Users dummyjson</Link></li>
            </ul>
            <hr/>
            <Outlet/>
        </div>
    );
};