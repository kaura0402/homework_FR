import {useEffect, useState} from "react";
import type {ICommentDummyjsonMod} from "../../models/dummyjson_model/dummyjson_model/ICommentDummyjsonMod.ts";
import {commentsApiServiceDummy} from "../../service/api.service.ts";
import {CommentDummyjsonComponent} from "../dummyjson_component/CommentDummyjsonComponent.tsx";

export const CommentsDummyjsonComponent = () => {
    const [comments, setComments] = useState<ICommentDummyjsonMod[]>([]);
    useEffect(() => {
        commentsApiServiceDummy().then(value => setComments(value));
    }, []);
    return (
        <div>
            {comments.map(comment => (<CommentDummyjsonComponent key={comment.id} commentsdummy={comment}/>
            ))}
        </div>
    );
};
