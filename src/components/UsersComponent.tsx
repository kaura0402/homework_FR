import {UserComponent} from "./UserComponent.tsx";
import {useEffect, useState} from "react";

export const UsersComponent = () => {
    console.log("Hello UsersComponent");
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch("http://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(res => {
                setUsers(res.data);
            })
    }, []);
    return (
        <div>
            Users Component
            <UserComponent/>
        </div>
    );
};
