import type {FC} from "react";
import type {PostModel} from "../../models/PostsModels.ts";
import "./Post.css";

class PostProps {
    post!: PostModel;
}

export const Post:FC<PostProps> = ({post:{userId, id, title, body}}:PostProps) => {
    return (
        <div className="post">
            <p>{userId} / {id}</p>

            <h2>{title}</h2>
            <p>{body}</p>


        </div>
    );
};