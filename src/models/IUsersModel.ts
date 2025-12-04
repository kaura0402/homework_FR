import type {IUserModel} from "./IUserModel.ts";

export interface IUsersModel  {
    users: IUserModel[];
    total: number;
    skip: number;
    limit: number;
}