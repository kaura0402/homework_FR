import {useEffect, useState} from "react";
import type {CommentsModels} from "../../models/CommentsModels.ts";
import {loadComments} from "../../services/api.service.ts";
import {Coment} from "../coment-component/Coment.tsx";

export const Coments = () => {
    const [comments, setComments] = useState<CommentsModels[]>([]);
    useEffect(() => {
        loadComments().then(comments => setComments(comments));
    }, []);
    return (
        <div>
            {comments.map(comment => (
                <Coment key={comment.id} comment={comment} />
            ))}
        </div>
    );
};