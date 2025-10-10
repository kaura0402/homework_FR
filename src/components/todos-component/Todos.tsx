import {useEffect, useState} from "react";
import type {TodoModel} from "../../models/TodoModel.ts";
import {apiServiceTodos} from "../../service/api.service.ts";
import {Todo} from "../todo-component/Todo.tsx";

export const Todos = () => {
    const [todos, setTodos] = useState<TodoModel[]>([]);
    useEffect(() => {
        apiServiceTodos().then(value => setTodos(value));
    }, []);
    return (
        <div>
            {todos.map(todo => (
                <Todo key={todo.id} todo={todo} />
            ))}
        </div>
    );
};