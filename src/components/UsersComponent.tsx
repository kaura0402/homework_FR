import {useEffect, useState} from "react";
import type {IUserModel} from "../models/IUserModel.ts";
import {fetchUsers} from "../services/api.service.tsx";
import {UserComponet} from "./UserComponet.tsx";

export const UsersComponent = () => {
    const [users, setUsers] = useState<IUserModel[]>([]);
    useEffect(() => {
        fetchUsers().then(value => setUsers(value));
    }, []);
    return (
        <div>
            {
                users.map(user => <UserComponet user={user} key={user.id}/>)
            }
        </div>
    );
};