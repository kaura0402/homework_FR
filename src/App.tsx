import './App.css'
import {A} from "./components/components_a/A.tsx";
import {B} from "./components/components_b/B.tsx";
import {MyContext} from "./context/MyContextProvider.tsx";
import {useState} from "react";

function App() {

    const [themeColor, setThemeColor] = useState<string>('light');
   // themeColor Це змінна стану (state). Вона зберігає поточне значення.  'light' або 'dark'
   // setThemeColor: Це спеціальна функція для оновлення цього стану. В React  не можена просто написати themeColor = 'dark',  обов'язково треба використати цю функцію, щоб React дізнався про зміни і перемалював інтерфейс.
    //useState: Це "хук", який дозволяє функціональним компонентам мати свій стан.
    //<string>: Це Generic (узагальнення) в TypeScript. Тут вказуємо мові, що в цій змінній може зберігатися тільки рядок. Якщо  спробувати записати туди число, TypeScript видасть помилку ще до запуску коду.
    // ('light'): Це початкове значення. Коли додаток завантажиться вперше, themeColor буде дорівнювати 'light'.

  return (
    <div>
        <MyContext.Provider value={{ //Це спеціальний компонент, який надає доступ до даних усім своїм нащадкам
            // (у твоєму випадку — компонентам <A/> та <B/>).
           // Provider (Постачальник) «оголошує»: «Усі, хто всередині мене, можуть користуватися моїми даними».
            //Атрибут value  У value ми передаємо об'єкт, який містить:
            theme:themeColor,
            //theme: themeColor: Поточне значення кольору теми з твого useState. Тепер будь-який компонент всередині зможе дізнатися, яка зараз тема.
            changeTheme:
            //changeTheme: Це функція-обгортка. Ми передаємо її вниз, щоб компоненти могли не просто "знати" тему, а й змінювати її.
                (themeValue: string) => {
                setThemeColor(themeValue)
                    //themeValue: string — це типізація TypeScript, яка гарантує, що функція прийме лише рядок.
            }
        }}>
      <A/>
      <B/>
            {/*Завдяки тому, що вони загорнуті в Provider, вони (та їхні діти) зможуть отримати доступ до теми через хук useContext(MyContext).*/}
        </MyContext.Provider>
    </div>
  )
}

export default App
