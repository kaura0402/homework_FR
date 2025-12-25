import {UserComponent} from "./UserComponent.tsx";
import {useCallback, useEffect, useMemo, useState} from "react";


export const UsersComponent = () => {
    console.log("Hello UsersComponent");
    //масив — це об'єкт (посилальний тип даних), у звичайному випадку він би створювався заново при кожному рендерингу UsersComponent.

    const [users, setUsers] = useState([]);

    const arr:number[]=useMemo(()=>{//arr  працює, але повторно  не викликається
        return [1,2,3,4,5,6];
    },
        []);
    //Завдяки useMemo з порожнім масивом залежностей [], посилання на цей масив залишається стабільним. React запам'ятовує його один раз і передає той самий об'єкт при наступних оновленнях компонента.
    console.log(users);//заглушка
const foo = useCallback( ()=>{ //Функція foo працює, але повторно UserComponent не викликається
    console.log("test");
}, [])
//Аналогічно масиву, функції  створюються заново під час кожного виклику батьківської функції. useCallback гарантує, що foo завжди буде посилатися на ту саму ділянку пам'яті.
    //Це важливо для пропсів, які  передаємо в дочірні компоненти.
    useEffect(() => {
        fetch("http://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(res => {
                setUsers(res.data);
            })
    }, []);
    return (
        <div>
            Users Component
            <UserComponent foo={foo} arr={arr}/>
        </div>
    );
};
