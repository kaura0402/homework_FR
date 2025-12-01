import type {IUserResponsModel} from "../models/IUserResponsModel.ts";
import type {ICartResponsModel} from "../models/ICartResponsModel.ts";

const baseUrl = 'https://dummyjson.com'

export const userService ={
    getAllUsers: async (): Promise<IUserResponsModel>=>{
        return await fetch(baseUrl+ '/users')
            .then(value => value.json());
    }
}
export const cartService={
    getCartOfUsers: async (userId: string):Promise<ICartResponsModel>=>{
        return await fetch(baseUrl +'/carts/user/' + userId)
            .then(res => res.json());
    }
}
