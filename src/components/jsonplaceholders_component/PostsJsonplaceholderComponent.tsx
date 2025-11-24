import {useEffect, useState} from "react";
import type {IPostsJsonplaceholderMod} from "../../models/jsonplaceholder_model/IPostsJsonplaceholderMod.ts";
import {postsApiServiceJson} from "../../service/api.service.ts";
import {PostJsonplaceholderComponent} from "../jsonplaceholder_component/PostJsonplaceholderComponent.tsx";

export const PostsJsonplaceholderComponent = () => {
    const [posts, setPosts] = useState<IPostsJsonplaceholderMod[]>
    ([]);
    useEffect(() => {
        postsApiServiceJson.getPosts().then(((allPosts) => {
            setPosts(allPosts)
        }))
    }, []);
    return (
        <div>
            {
                posts.map(post => <PostJsonplaceholderComponent item={post} key={post.id}/>)
            }
        </div>
    );
};
