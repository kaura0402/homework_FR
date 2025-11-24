import type {FC, JSX} from "react";
import type {IPostsJsonplaceholderMod} from "../../models/jsonplaceholder_model/IPostsJsonplaceholderMod.ts";

type PostsTypeProps = {
    item: IPostsJsonplaceholderMod,
    key?: number
}

export const PostJsonplaceholderComponent:FC <PostsTypeProps> = ({item}) => {
    return (
        <div>
            <h2>{item.title}</h2>
            <p>{item.body}</p>
            <hr/>
        </div>
    );
};

