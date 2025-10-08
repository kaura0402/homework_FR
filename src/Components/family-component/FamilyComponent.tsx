import {simpsons} from "../../data/Data.ts";
import {CharacterComponent} from "../character-component/CharacterComponent.tsx";
import "./FamilyComponent.css";
export const FamilyComponent:() =>Element = ():Element => {

    return (
        <div >
            {
                simpsons.map((value,index) => <CharacterComponent key={index}  item={value} >
                        {value.info}
                        </CharacterComponent>
                )
            }

        </div>
    );
};