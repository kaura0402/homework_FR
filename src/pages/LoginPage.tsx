import {useEffect} from "react";
import {login} from "../services/api.service.ts";
import {LoginComponent} from "../components/LoginComponent.tsx";

export const LoginPage = () => {
    useEffect(() => {
        login({
            "username": "emilys",
            "password": "emilyspass",
            "expiresInMins": 1
        })
    }, []);
    return (
        <div>
        <LoginComponent/>
        </div>
    );
};