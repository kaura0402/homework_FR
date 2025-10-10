import type {TodoModel} from "./TodoModel.ts";

export interface TodosModel {
	todos: TodoModel[];
	total: number;
	skip: number;
	limit: number;
}