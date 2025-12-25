import {useContext} from "react";
import {MyContext} from "../../context/MyContextProvider.tsx";
import './AAA.css'

export const AAA = () => {

    const {theme} = useContext(MyContext);
    //Тут  дістаємо із контексту саме значення кольору ('light' або 'dark').  щойно  натиснемо кнопку в компоненті BA, React побачить зміну стану в провайдері та автоматично перемалює цей компонент AAA з новим значенням.

    return (
        <div className={theme}>
this is komponent AAA , and theme is - {theme}
        </div>
    );
};
//Context: Сховище для даних.
//
// Provider: Роздає дані (з useState).
//
// Component BA: Змінює дані (через функцію changeTheme).
//
// Component AAA: Відображає дані та змінює свій вигляд (через змінну theme).