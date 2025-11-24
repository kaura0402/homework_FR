import type {IPostDummyjsonMod} from "./dummyjson_model/IPostDummyjsonMod.ts";

export interface IPostsDummyjsonMod {
    posts: IPostDummyjsonMod[];
    total: number;
    skip: number;
    limit: number;
}