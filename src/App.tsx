import './App.css'
import {Outlet} from "react-router/internal/react-server-client";
import {Menu} from "./Components/menu/Menu.tsx";

function App() {


  return (
    <div>
      <Menu/>
      <Outlet/>
    </div>
  )
}

export default App
