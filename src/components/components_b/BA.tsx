import {useContext} from "react";
import {MyContext} from "../../context/MyContextProvider.tsx";

export const BA = () => {
//компонент BA тепер виступає в ролі "пульта керування" темою
    const {changeTheme} = useContext(MyContext);
//BA напряму звертається до "хмаринки" MyContext
    //використовуємо деструктуризацію, щоб витягнути тільки changeTheme, оскільки саме значення theme нам у цьому конкретному компоненті (для кнопок) не потрібне.
    const handlerDark = () => {
        changeTheme('dark')
        //Коли  натискаємо на кнопку "dark", цей обробник викликає функцію changeTheme. Оскільки ця функція була передана через value у провайдері , вона насправді запустить setThemeColor('dark') у головному компоненті.
    };
    const handlerLight = () => {
        changeTheme('light')
       // Коли ти натискаєш на кнопку "light", цей обробник викликає функцію changeTheme. Оскільки ця функція була передана через value у провайдері (з другого повідомлення), вона насправді запустить setThemeColor('light') у головному компоненті.
    };
    return (
        <div>
            <button onClick={handlerDark}>chenge theme to dark</button> //СТВОРЕННЯ  кнопок на перемикання
            <button onClick={handlerLight}>chenge theme to light</button>  //СТВОРЕННЯ  кнопок на перемикання
        </div>
    );
};