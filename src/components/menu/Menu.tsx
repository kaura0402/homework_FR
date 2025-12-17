import {Link} from "react-router-dom";

export const Menu = () => {
    return (
        <>
            <div>
                <ul>
                    <li><Link to={''}>Home</Link></li>
                    <li><Link to={'login'}>Login</Link></li>
                    <li><Link to={'/auth/resorces'}>AuthResources</Link></li>
                </ul>
            </div>
        </>
    );
};
