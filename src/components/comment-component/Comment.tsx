import type {CommentModel} from "../../models/CommentModel.ts";
import type {FC} from "react";
import "./Comment.css";

class CommentProps {
    comment!: CommentModel;
}

export const Comment: FC<CommentProps> = ({comment:{id,body,postId,likes,user}}) =>{


    return (
        <div className={"comment"}>
            <p>{id} // {postId}</p>
           <p>{body}</p>
           <p>{likes} {}</p>
           <p>{user.id}  {user.username} = {user.fullName}</p>
        </div>
    );
};