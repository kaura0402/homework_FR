import type {TodosModel} from "../models/TodosModel.ts";

const endpointTodos = import.meta.env.VITE_API_URL + 'todos';

export const loadTodos :() => Promise<TodosModel[]> = async (): Promise<TodosModel[]> => {
    return await fetch(endpointTodos).then(res => res.json());
};
