export interface IPostDummyjsonMod {
    id: number;
    title: string;
    body: string;
    tags: string[];
    reactions: PostsReactions;
    views: number;
    userId: number;
}
export interface PostsReactions {
    likes: number;
    dislikes: number;
}
