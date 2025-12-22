import {useContext} from "react";
import {MyContext} from "../../context/MyContextProvider.tsx";
import './AAA.css'

export const AAA = () => {

    const {theme} = useContext(MyContext);

    return (
        <div className={theme}>
this is komponent AAA , and theme is - {theme}
        </div>
    );
};