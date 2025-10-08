import './App.css'
import {SoursesComponent} from "./component/sourses-component/SoursesComponent.tsx";
import coursesArray from "./data/courses-array.ts";

function App() {


  return (
    <>
      <SoursesComponent courses={coursesArray} />
    </>
  )
}

export default App
