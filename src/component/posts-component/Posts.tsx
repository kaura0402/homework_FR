import {useEffect, useState} from "react";
import type {PostModel} from "../../models/PostsModels.ts";
import {loadPosts} from "../../service/api.servise.ts";
import {Post} from "../post-component/Post.tsx";

export const Posts = () => {
    const [posts, setPosts] = useState<PostModel[]>([]);
    useEffect(() => {
        loadPosts().then(posts => setPosts(posts));
    }, []);
    return (
        <div>
            {posts.map(post => (
                <Post key={post.id} post={post} />
            ))}
        </div>
    );
};