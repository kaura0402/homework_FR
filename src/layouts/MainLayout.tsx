import {Outlet} from "react-router";
import {Menu} from "../components/menu/Menu.tsx";

export const MainLayout = () => {
    return      <div>
        <h2>Home Work 3 / 6</h2>
        <Menu/>
            <Outlet/>
        </div>

};