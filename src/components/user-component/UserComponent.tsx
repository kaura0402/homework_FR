import type {IUser} from "../../models/IUser.ts";
import {FC, JSX} from "react";
import "./UserComponent.css"
import {useNavigate} from "react-router";


class Props {
    user: IUser;
    key: number
}

export const UserComponent:FC<Props> = ( { user }:Props) => {
    const navigation = useNavigate();
    const onButtonClickNavigate = () => {
        navigation('/users/' + user.id + '/carts')
    }

    return (
        <div>
            {user.username} : {user.email}
            <br/>
            < button className={'button'} onClick={onButtonClickNavigate}>Click me  ID :{user.id}
            </button>
        </div>
    );
};