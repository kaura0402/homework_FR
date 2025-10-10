import type {PostModel} from "../models/PostModel.ts";
import type {PostsModel} from "../models/PostsModel.ts";

const endpontPost = import.meta.env.VITE_API_URL + "posts"

export const apiServicePost:() => Promise<PostModel[]> = async (): Promise<PostModel[]> => {
    const response:PostsModel = await fetch(endpontPost).then(value => value.json())

    return response.posts

}
