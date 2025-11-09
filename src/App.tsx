import './App.css'
import {Outlet} from "react-router-dom";
import {Menu} from "./components/menu/Menu.tsx";

function App() {


    return (
        <>
            <Menu/>
            <h1>Home work 3 / 1</h1>
            <Outlet/>
        </>
    )
}

export default App
