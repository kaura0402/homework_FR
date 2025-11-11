import {Link, Outlet} from "react-router-dom";

export const Comments = () => {
    return (
        <div>
            <ul>
                <li><Link to = {'jsonplaceholder'}>Comments jsonplaceholder</Link></li>
            </ul>
            <Outlet/>
        </div>
    );
};