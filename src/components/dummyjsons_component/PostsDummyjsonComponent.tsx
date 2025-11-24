import type {IPostDummyjsonMod} from "../../models/dummyjson_model/dummyjson_model/IPostDummyjsonMod.ts";
import {useEffect, useState} from "react";
import {postsApiServiceDummy} from "../../service/api.service.ts";
import {PostDummyjsonComponent} from "../dummyjson_component/PostDummyjsonComponent.tsx";

export const PostsDummyjsonComponent = () => {
    const [posts, setPosts] = useState<IPostDummyjsonMod[]>([]);
    useEffect(() => {
        postsApiServiceDummy().then(value => setPosts(value));
    }, []);
    return (
        <div>
            {posts.map(post => (PostDummyjsonComponent({postdummy: post, key: post.id})))}
        </div>
    );
};
