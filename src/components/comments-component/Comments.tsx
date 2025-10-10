import {useEffect, useState} from "react";
import type {CommentModel} from "../../models/CommentModel.ts";
import {apiServiceComments} from "../../servises/api.service.ts";
import {Comment} from "../comment-component/Comment.tsx";

export const Comments = () => {
    const [comments, setComments] = useState<CommentModel[]>([]);
    useEffect(() => {
        apiServiceComments().then(value =>  setComments(value));
    }, []);
    return (
        <div>
            {comments.map(comment=><Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};