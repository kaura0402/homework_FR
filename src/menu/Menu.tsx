import {Link} from "react-router-dom";

export const Menu = () => {
    return (
        <div>
            <ul>
                <li><Link to={''}>Hame Page</Link></li>
                <li><Link to={'users'}>Users</Link></li>
            </ul>

        </div>
    );
};