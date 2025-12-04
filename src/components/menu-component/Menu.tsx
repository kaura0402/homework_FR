import {Link} from "react-router-dom";

const Menu = () => {
    return (
        <div>
            <ul>
                <li><Link to={''}>Home Page</Link></li>
                <li><Link to={'users'}>See Users</Link></li>
            </ul>
        </div>
    );
};

export default Menu;
