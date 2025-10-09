import {useEffect, useState} from "react";
import type {TodosModel} from "../../models/TodosModel.ts";
import {loadTodos} from "../../services/api.service.ts";
import {Todo} from "../todo-component/Todo.tsx";

export const Todos = () => {
    const [todos, setTodos] = useState<TodosModel[]>([]);
    useEffect(() => {
loadTodos().then(data => setTodos(data));
    }, []);
    return (
        <div>
            {todos.map(todo => (
                <Todo key={todo.id} todo={todo} />
            ))}
        </div>
    );
};