import {UserComponent} from "./UserComponent.tsx";
import {useCallback, useEffect, useState} from "react";


export const UsersComponent = () => {
    console.log("Hello UsersComponent");

    const [users, setUsers] = useState([]);

const foo = useCallback( ()=>{ //Функція foo працює, але повторно UserComponent не викликається
    console.log("test");
}, [])

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
            <UserComponent foo={foo}/>
        </div>
    );
};
