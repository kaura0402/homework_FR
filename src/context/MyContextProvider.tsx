// файл для налаштування системи контексту. Тут  «сховище», яким будуть користуватися інші компоненти.
import {createContext} from "react";

type ContextValueType = {
    theme: string;
    changeTheme: (theme: string) => void;
}
/*  створюємо "контракт". кажемо програмі: "Будь-який об'єкт, який хоче називатися ContextValueType, мусить мати рядок theme та функцію changeTheme, яка нічого не повертає (void)". Це захищає  від помилок, коли  випадково забудемо передати потрібні дані.*/
const defaulValue : ContextValueType = {
    theme:'light',
    changeTheme: (theme: string) => {
        console.log(theme);
       /* Це значення, яке буде використане, якщо  спробуємо використати контекст поза межами MyContext.Provider.
             тут console.log  це лише початкове значення, у нього немає доступу до справжнього стану useState.
             Це просто "заглушка", щоб код не зламався до того, як спрацює реальний Провайдер. */
    }
}

export const MyContext= createContext<ContextValueType>(defaulValue);
/*
export: дозволяє  імпортувати MyContext у будь-якому іншому файлі (наприклад, у компонентах A або B).
<ContextValueType>:  підказка для TypeScript, щоб він знав, які дані будуть всередині.*/
