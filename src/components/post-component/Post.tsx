import type {FC} from "react";
import type {PostModel} from "../../models/PostModel.ts";
import "./Post.css"

class PostProps {
    post!:PostModel
}

export const Post:FC<PostProps> = ({post:{userId,id,title,body,reactions, views, tags }}) => {
    return (
        <div className="post">
            <p>{userId} // {id}</p>
            <p>{tags[0]}, {tags[1]}, {tags[2]}</p>
            <h2>{title}</h2>
            <p>{body}</p>
            <p>{views}</p>
            <p>Likes: {reactions.likes} // Dislikes: {reactions.dislikes}</p>

        </div>
    );
};