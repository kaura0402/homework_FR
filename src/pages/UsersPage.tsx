import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../store/store.tsx";
import {userActions} from "../slices/UserSlice.ts";
import type {IUser} from "../models/IUser.ts";

export const UsersPage = () => {

    const dispatch = useAppDispatch();
    const users = useAppSelector((state)=>state.userStoreSlice.users)

    useEffect(() => {
dispatch(userActions.loadUsers())
    }, [dispatch]);
    return (
        <>
            {users.map((user:IUser) => (<div key={user.id}><br/>{user.id}  {user.name}</div>))}
        </>
    );
};
