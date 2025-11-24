import type {FC, JSX} from "react";
import type {ICommentDummyjsonMod} from "../../models/dummyjson_model/dummyjson_model/ICommentDummyjsonMod.ts";

class CommentDummyProps {
    commentsdummy: ICommentDummyjsonMod;
    key?: string | number;

}

export const CommentDummyjsonComponent:FC<CommentDummyProps> = ({commentsdummy:{id,body, postId,
    likes, user}}) => {

    return (
        <div className={'comment-dummyjson'}>
            <p>Comment ID: {id} // Post ID: {postId}</p>
            <p>{body}</p>
            <p>Likes: {likes}</p>
            <p>User: {user.username} ({user.fullName})</p>
            <hr/>
            <hr/>

        </div>
    );
};
