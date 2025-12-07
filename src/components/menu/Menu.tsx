import { Link } from "react-router";

export const Menu = () => {
    return (
        <nav>
            <ul>
                <li><Link to ={''}>Home Page</Link></li>
                <li><Link to ={'cars'}>Cars Page</Link></li>
                <li><Link to ={'cars/create'}>Create Car Page</Link></li>
            </ul>
        </nav>
    );
}