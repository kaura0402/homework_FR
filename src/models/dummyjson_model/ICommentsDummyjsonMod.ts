import type {ICommentDummyjsonMod} from "./dummyjson_model/ICommentDummyjsonMod.ts";

export interface ICommentsDummyjsonMod {
    comments: ICommentDummyjsonMod[];
    total: number;
    skip: number;
    limit: number;
}