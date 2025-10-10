import type {TodoModel} from "../../models/TodoModel.ts";
import './Todo.css';

class TodoProps {
    todo!: TodoModel;
}

export const Todo: React.FC<TodoProps> = ({todo: {id, todo, completed, userId}}) => {
    return (
        <div className={'todo'}>
            <p>{userId} // {id}</p>
            <p>{todo}</p>
            <p>{completed.toString()}</p>
        </div>
    );
};