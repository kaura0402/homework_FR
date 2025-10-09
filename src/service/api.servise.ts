import type {PostModel} from "../models/PostsModels.ts";

const endpointPosts = import.meta.env.VITE_API_URL + 'posts';

export const loadPosts:() =>Promise<PostModel[]> = async ():Promise<PostModel[]> => {
    return await fetch(endpointPosts).then(response => response.json());
};
