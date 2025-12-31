import {useAppDispatch, useAppSelector} from "../store/store.tsx";
import {useEffect} from "react";
import {userActions} from "../slices/UserSlice.ts";
import {postActions} from "../slices/PostSlice.ts";
import {commentActions} from "../slices/CommentSlice.ts";

export const ComplexPage = () => {
    const dispatch = useAppDispatch();
    const {userStoreSlice:{users},commentStoreSlice:{comments},postStoreSlice:{posts}} = useAppSelector(state => state);
    useEffect(() => {
        if(!users.length){
            dispatch(userActions.loadUsers);
        }
if(!posts.length){
            dispatch(postActions.loadPosts);
        }
if(!comments.length){
            dispatch(commentActions.loadComments);
        }

    }, [dispatch, users, posts, comments]);
    return (
        <>

        </>
    );
};
