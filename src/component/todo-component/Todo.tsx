import type {FC} from "react";
import type {TodosModel} from "../../models/TodosModel.ts";
import "./Todo.css";

class TodoProps {
    todo!: TodosModel;
}

export const Todo : FC<TodoProps>= ({todo:{title, completed, userId, id}}: TodoProps) => {
    return (
        <div className={'todo'}>
            <h3>{userId} / {id}</h3>
            <h2>{title}</h2>
            <p>{completed.toString()}</p>


        </div>
    );
};