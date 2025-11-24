import type {FC, JSX} from "react";
import type {IPostDummyjsonMod} from "../../models/dummyjson_model/dummyjson_model/IPostDummyjsonMod.ts";

class PostDummyComProps {
    postdummy: IPostDummyjsonMod;
    key?: string | number;
}

export const PostDummyjsonComponent: FC<PostDummyComProps> = ({postdummy:{id, title, body, tags,
    reactions,userId}}) => {
    return (
        <div>
            <h2>{id} {title}</h2>
            <p>{body}</p>
            <p>Tags: {tags.join(', ')}</p>
            <p>Reactions: Likes - {reactions.likes}, Dislikes - {reactions.dislikes}</p>
            <p>User ID: {userId}</p>
            <hr/>
            <hr/>
        </div>
    );
};
