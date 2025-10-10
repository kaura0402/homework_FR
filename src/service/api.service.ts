import type {TodoModel} from "../models/TodoModel.ts";
import type {TodosModel} from "../models/TodosModel.ts";

const endpointTodos = import.meta.env.VITE_API_URL + 'todos';

export const apiServiceTodos:()=> Promise<TodoModel[]> = async (): Promise<TodoModel[]> => {
  const response: TodosModel = await fetch(endpointTodos).then(res => res.json());
  return response.todos;

}
