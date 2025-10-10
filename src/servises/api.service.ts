import type {CommentModel} from "../models/CommentModel.ts";
import type {CommentsModel} from "../models/CommentsModel.ts";

const API_URL_Comments = import.meta.env.VITE_API_URL + 'comments';

export const apiServiceComments: () => Promise<CommentModel[]> = async (): Promise<CommentModel[]> => {
    const response:CommentsModel = await fetch(API_URL_Comments).then(res => res.json());
    return response.comments;
}
