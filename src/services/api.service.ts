import axios from "axios";
import type {IUserWithToken} from "../models/IUserWithToken.ts";
import type {IProducts} from "../models/IProduct.ts";
import type {IProductsRespounsModel} from "../models/IProductsRespounsModel.ts";
import {retriveLocalStorage} from "./helpers.ts"
import type {ITokenPair} from "../models/ITokenPair.ts";

interface ILoginData {
    username: string;
    password: string;
    expiresInMins: number;
}

const axiosInstance = axios.create({
    baseURL: "https://dummyjson.com/auth",
    headers: {}
})

axiosInstance.interceptors.request.use((requestObject) => {
    if (requestObject.method?.toUpperCase() === 'GET') {
        requestObject.headers.Authorization = 'Bearer ' + retriveLocalStorage<IUserWithToken>('user').accessToken;
    }
    return requestObject;
})

// постовий запит

export const login = async ({username, password, expiresInMins}: ILoginData):
    Promise<IUserWithToken> => {
    const {data: userWithToken} = await axiosInstance.post<IUserWithToken>('/login', {
        username,
        password,
        expiresInMins
    });
    console.log(userWithToken);
    localStorage.setItem("user", JSON.stringify(userWithToken));
    return userWithToken
}

// гет запит

export const getAuthProducts = async (): Promise<IProducts[]> => {
    const {data: {products}} = await axiosInstance.get<IProductsRespounsModel>('/products', {});
    return products;
};

export const refresh = async () => {
    const IUserWithToken = retriveLocalStorage<IUserWithToken>('user');
    const {data: {accessToken, refreshToken}} = await axiosInstance.post<ITokenPair>('/refresh', {
        refreshToken: IUserWithToken.refreshToken,
        expiresInMins: 1
    });
    IUserWithToken.accessToken = accessToken;
    IUserWithToken.refreshToken = refreshToken;
    localStorage.setItem('user', JSON.stringify(IUserWithToken));
}