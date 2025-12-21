import {UserComponent} from "./UserComponent.tsx";
import {useCallback, useEffect, useMemo, useState} from "react";


export const UsersComponent = () => {
    console.log("Hello UsersComponent");

    const [users, setUsers] = useState([]);

    const arr:number[]=useMemo(()=>{//arr  працює, але повторно  не викликається
        return [1,2,3,4,5,6];
    },
        []);

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
            <UserComponent foo={foo} arr={arr}/>
        </div>
    );
};
