import './App.css'
import {A} from "./components/components_a/A.tsx";
import {B} from "./components/components_b/B.tsx";
import {MyContext} from "./context/MyContextProvider.tsx";
import {useState} from "react";

function App() {

    const [themeColor, setThemeColor] = useState<string>('light');
    
  return (
    <div>
        <MyContext.Provider value={{
            theme:themeColor,
            changeTheme: (themeValue: string) => {
                setThemeColor(themeValue)
            }
        }}>
      <A/>
      <B/>
            
        </MyContext.Provider>
    </div>
  )
}

export default App
