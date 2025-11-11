import {Link} from "react-router-dom";
import './Menu.css'

const Menu = () => {
    return (
        <div>
            <ul>
                <li><h2>Home Work 3 / 2</h2></li>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to = {'/Users'}>Users page</Link></li>
                <li><Link to = {'/posts'}>Posts page</Link></li>
                <li><Link to = {'/comments'}>Comments page</Link></li>
            </ul>
        </div>
    );
};
export default Menu;