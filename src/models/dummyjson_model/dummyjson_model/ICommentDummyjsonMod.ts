export interface ICommentDummyjsonMod {
    id: number;
    body: string;
    postId: number;
    likes: number;
    user: CommentsUser;
}
interface CommentsUser {
    id: number;
    username: string;
    fullName: string;
}