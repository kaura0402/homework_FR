

export interface PostModel {
	id: number;
	title: string;
	body: string;
	tags: string[];
	reactions: PostsReactions;
	views: number;
	userId: number;
}
interface PostsReactions {
	likes: number;
	dislikes: number;
}