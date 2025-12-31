import {useAppDispatch, useAppSelector} from "../store/store.tsx";
import {useEffect} from "react";
import {postActions} from "../slices/PostSlice.ts";

export const PostsPage = () => {

    const dispatch = useAppDispatch();
    const posts = useAppSelector((state) => state.postStoreSlice.posts)

    useEffect(() => {
        dispatch(postActions.loadPosts())
    }, [dispatch]);

    return (
        <>
            {posts.map((post) => (<div key={post.id}>UserID = {post.userId}/ PostId = {post.id}  {post.title}</div>))}
        </>
    );
};
