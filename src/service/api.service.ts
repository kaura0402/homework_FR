import type {IUserJsonplaceholderMod} from "../models/jsonplaceholder_model/IUserJsonplaceholderMod.ts";
import {DummyjsonUrl, JsonplaceholderUrl} from "../constans/urls.ts";
import type {IPostsJsonplaceholderMod} from "../models/jsonplaceholder_model/IPostsJsonplaceholderMod.ts";
import type {ICommentsJsonplaceholderMod} from "../models/jsonplaceholder_model/ICommentsJsonplaceholderMod.ts";
import type {ICommentsDummyjsonMod} from "../models/dummyjson_model/ICommentsDummyjsonMod.ts";
import type {ICommentDummyjsonMod} from "../models/dummyjson_model/dummyjson_model/ICommentDummyjsonMod.ts";
import type {IUserDummyMod} from "../models/dummyjson_model/dummyjson_model/IUserDummyjsonMod.ts";
import type {IUsersDummyjsonMod} from "../models/dummyjson_model/IUsersDummyjsonMod.ts";
import type {IPostDummyjsonMod} from "../models/dummyjson_model/dummyjson_model/IPostDummyjsonMod.ts";
import type {IPostsDummyjsonMod} from "../models/dummyjson_model/IPostsDummyjsonMod.ts";

export const usersApiServiceJson = {
    getUsers: async (): Promise<IUserJsonplaceholderMod[]> => {
        return await fetch(JsonplaceholderUrl.users.allUsers)
            .then(response => response.json())
    }
}
export const usersApiServiceDummy: () => Promise<IUserDummyMod[]> = async (): Promise<IUserDummyMod[]> => {
    const response: IUsersDummyjsonMod = await fetch(DummyjsonUrl.users.allUsers)
        .then(res => res.json());
    return response.users;
}

export const postsApiServiceJson = {
    getPosts: async (): Promise<IPostsJsonplaceholderMod[]> => {
        return await fetch(JsonplaceholderUrl.posts.allPosts)
            .then(response => response.json())
    }
}

export const postsApiServiceDummy: () => Promise<IPostDummyjsonMod[]> = async (): Promise<IPostDummyjsonMod[]> => {
    const response: IPostsDummyjsonMod = await fetch(DummyjsonUrl.posts.allPosts)
        .then(res => res.json());
    return response.posts;
}

export const commentsApiServiceJson = {
    getComments: async (): Promise<ICommentsJsonplaceholderMod[]> => {
        return await fetch(JsonplaceholderUrl.comments.allComments)
            .then(response => response.json())
    }
}

export const commentsApiServiceDummy: () => Promise<ICommentDummyjsonMod[]> =
    async (): Promise<ICommentDummyjsonMod[]> => {
        const response: ICommentsDummyjsonMod = await fetch(DummyjsonUrl.comments.allComments)
            .then(res => res.json());
        return response.comments;


    }
