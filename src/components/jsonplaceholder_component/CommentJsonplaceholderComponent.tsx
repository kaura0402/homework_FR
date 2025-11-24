import type {FC, JSX} from "react";
import type {ICommentsJsonplaceholderMod} from "../../models/jsonplaceholder_model/ICommentsJsonplaceholderMod.ts";

type CommentsJsonProps = {
    item: ICommentsJsonplaceholderMod,
    key?: number
}

export const CommentJsonplaceholderComponent:FC<CommentsJsonProps> = ({item}) => {

    return (
        <div>
            <h2>{item.name} (ID: {item.id})</h2>
            <p>Email: {item.email}</p>
            <p>Comment:</p>
            <p>{item.body}</p>
            <hr/>
        </div>
    );
};
