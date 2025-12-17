import axios from "axios";
import type {IUserWithToken} from "../models/IUserWithToken.ts";

const axiosInstance = axios.create({
    baseURL: "https://dummyjson.com/auth",
    headers: {}
})

type LoginData = {
    username: string;
    password: string;
    expiresInMins: number;
}

export const login  = async ({username, password, expiresInMins}:
                             LoginData ) => {
   const {data: UserWithToken} = await axiosInstance.post<IUserWithToken>('/login', {username, password, expiresInMins});

    console.log(UserWithToken)

    }

