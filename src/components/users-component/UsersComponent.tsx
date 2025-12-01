import {useEffect, useState} from "react";
import type {IUser} from "../../models/IUser.ts";
import type {IUserResponsModel} from "../../models/IUserResponsModel.ts";
import {UserComponent} from "../user-component/UserComponent.tsx";
import {userService} from "../../services/api.service.ts";

export const UsersComponent = () => {
    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        userService.getAllUsers()
            .then(({users}: IUserResponsModel) => {
                setUsers(users);
            });
    }, []);

    return (
        <div>
            {
                users.map((user: IUser) => <UserComponent user={user} key={user.id}/>
                )
            }

        </div>
    );
};
