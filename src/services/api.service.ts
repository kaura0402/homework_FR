import type {CommentsModels} from "../models/CommentsModels.ts";

const endpointComments = import.meta.env.VITE_API_URL + "comments";

export const loadComments:() => Promise<CommentsModels[]> = async ():Promise<CommentsModels[]> => {
    return await fetch(endpointComments)
        .then(response => response.json());
}
