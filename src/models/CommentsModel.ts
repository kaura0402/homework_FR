import type {CommentModel} from "./CommentModel.ts";

export interface CommentsModel {
	comments: CommentModel[];
	total: number;
	skip: number;
	limit: number;
}

