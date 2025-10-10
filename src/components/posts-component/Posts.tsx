import {useEffect, useState} from "react";
import type {PostModel} from "../../models/PostModel.ts";
import {apiServicePost} from "../../service/api.service.ts";
import {Post} from "../post-component/Post.tsx";

export const Posts = () => {
    const [posts, setPosts] = useState<PostModel[]>([]);
    useEffect(() => {
        apiServicePost().then(value => setPosts(value));
    }, []);
    return (
        <div>
            {posts.map(post => (
                <Post key={post.id} post={post} />
            ))}
        </div>
    );
};