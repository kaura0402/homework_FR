import {commentsApiServiceJson} from "../../service/api.service.ts";
import {useEffect, useState} from "react";
import type {ICommentsJsonplaceholderMod} from "../../models/jsonplaceholder_model/ICommentsJsonplaceholderMod.ts";
import {CommentJsonplaceholderComponent} from "../jsonplaceholder_component/CommentJsonplaceholderComponent.tsx";

export const CommentsJsonplaceholderComponent = () => {
    const [comments, setComments] = useState<ICommentsJsonplaceholderMod[]>([]);
    useEffect(() => {
        commentsApiServiceJson.getComments().then(value => setComments(value));
    }, []);
    return (
        <div>
            {
                comments.map(comment => <CommentJsonplaceholderComponent item={comment} key={comment.id}/>)
            }
        </div>
    );
};
