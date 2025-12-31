import {useAppDispatch, useAppSelector} from "../store/store.tsx";
import {useEffect} from "react";
import {commentActions} from "../slices/CommentSlice.ts";
import type {IComment} from "../models/IComment.ts";

export const CommentsPage = () => {

    const dispatch = useAppDispatch();
    const comments = useAppSelector((state)=>state.commentStoreSlice.comments);

    useEffect(() => {
        dispatch(commentActions.loadComments())
    }, [dispatch]);

    return (
        <>
            {comments.map((comment:IComment) => (<div key={comment.id}>PostId = {comment.postId} / Comment = {comment.id} {comment.body}</div>))}
        </>
    );
};

