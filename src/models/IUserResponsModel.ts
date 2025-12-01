import type {IUser} from "./IUser.ts";

export interface IUserResponsModel  {
    users: IUser[];
    total: number;
    skip: number;
    limit: number;
}