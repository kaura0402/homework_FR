import {Link} from "react-router-dom";
import './Menu.css'

export const Menu = () => {
    return (
        <div>
            <ul>
                <li><h2>Home Work 3 / 3</h2></li>
                <li><Link to={'/'}>Home page</Link></li>
                <li><Link to={'/Users'}>Users Page</Link></li>
                <li><Link to={'/Posts'}>Posts Page</Link></li>
                <li><Link to={'/Comments'}>Comments Page</Link></li>
            </ul>
        </div>
    );
};
