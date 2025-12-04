import '../App.css'
import {Outlet} from "react-router-dom";
import Menu from "../components/menu-component/Menu.tsx";

function MainLayout() {

    return (
        <div>
            <Menu/>
            <br/>
            <Outlet/>

        </div>
    );
}

export default MainLayout
