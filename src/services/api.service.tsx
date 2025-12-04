import type {IUserModel} from "../models/IUserModel.ts";
import type {IUsersModel} from "../models/IUsersModel.ts";

const endpointUsers = import.meta.env.VITE_BASE_URL + '/users';

export const fetchUsers:()=> Promise<IUserModel[]> = async ():Promise<IUserModel[]> => {
    const response:IUsersModel = await fetch(endpointUsers)
        .then(res => res.json());
    return response.users;
}