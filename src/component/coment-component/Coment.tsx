import type {CommentsModels} from "../../models/CommentsModels.ts";
import "./Comment.css";

class CommentProps {
    comment!: CommentsModels;
}

export const Coment:React.FC<CommentProps> = ({comment:{postId,id,name,email,body}}:CommentProps) => {
    return (
        <div>
            <p>{postId} / {id} </p>
            <p></p>
            <h2>{name}</h2>
            <p>{email}</p>
            <p className="body">{body}</p>
        </div>
    );
};