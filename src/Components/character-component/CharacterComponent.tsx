import type {ICharacter} from "../../models/ICharacter.ts";
import type {JSX, ReactNode} from "react";
import "./CharacterComponent.css";
interface ICharacterComponentProps {
    item: ICharacter;
    children: ReactNode;
}

export const CharacterComponent:({item}: ICharacterComponentProps) => JSX.Element =({item, children}:ICharacterComponentProps) => {
    return (
        <div className="character">

            <h2>{item.name}  {item.surname}</h2>
            <h3>{item.age}</h3>
            <p>{children}</p>
            <img src={item.photo} alt="" />
        </div>
    );
};