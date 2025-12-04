import type {FC, JSX} from "react";
import type {IUserModel} from "../models/IUserModel.ts";

class Props {
    user: IUserModel;
    key : number;
}

export const UserComponet : FC<Props> = ({user:{username}}) => {
    return (
        <div>
            <p>{username}</p>
        </div>
    );
};