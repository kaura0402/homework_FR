import type {IUserJsonplaceholderMod} from "../../models/jsonplaceholder_model/IUserJsonplaceholderMod.ts";
import {useEffect, useState} from "react";
import {usersApiServiceJson} from "../../service/api.service.ts";
import {UserJsonplaceholderComponent} from "../jsonplaceholder_component/UserJsonplaceholderComponent.tsx";

export const UsersJsonplaceholderComponent = () => {

    const [users, setUsers] = useState<IUserJsonplaceholderMod []>
    ([]);
    useEffect(() => {
        usersApiServiceJson.getUsers().then(((allUsers) => {
            setUsers(allUsers);
        }))

    }, []);

    return (
        <div>
            {
                users.map(user => <UserJsonplaceholderComponent item={user} key={user.id}/>)
            }
        </div>
    );
};
