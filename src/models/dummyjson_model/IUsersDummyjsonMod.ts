import type {IUserDummyMod} from "./dummyjson_model/IUserDummyjsonMod.ts";

export interface IUsersDummyjsonMod {
    users: IUserDummyMod[];
    total: number;
    skip: number;
    limit: number;
}
