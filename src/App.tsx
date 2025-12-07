import { Outlet } from "react-router";
import { Menu } from "./components/menu/Menu";

export const App = () => {
    return (
        <div>
            <Menu />
            <Outlet />
        </div>
    );

}