import {useEffect, useState} from "react";
import {usersApiServiceDummy} from "../../service/api.service.ts";
import type {IUserDummyMod} from "../../models/dummyjson_model/dummyjson_model/IUserDummyjsonMod.ts";
import {UserDummyjsonComponent} from "../dummyjson_component/UserDummyjsonComponent.tsx";

export const UsersDummyjsonComponent = () => {
    const [userdummy, setUserdummy] = useState<IUserDummyMod[]>([]);
    useEffect(() => {
        usersApiServiceDummy().then(value => setUserdummy(value));
    }, []);
    return (
        <div>
            {
                userdummy.map(user => (<UserDummyjsonComponent key={user.id} user={user}/>
                ))
            }
        </div>
    );
};
