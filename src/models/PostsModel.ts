import type {PostModel} from "./PostModel.ts";

export interface PostsModel {
	posts: PostModel[];
	total: number;
	skip: number;
	limit: number;
}
