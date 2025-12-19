import {useEffect} from "react";
import {login} from "../services/api.service.ts";

export const LoginComponent = () => {

        useEffect(() => {  // беремо конкретного користувача
            login({
                "username": "emilys",
                "password": "emilyspass",
                "expiresInMins": 1
            })
        }, []);
    return (
        <></>
    );
};
