import {http} from "../services/http";
import {TodoDto} from "./todo.dto";

export const getTodosRequest = (): Promise<TodoDto[]> => http.client.get('/todos');

export const updateTodoRequest = (data: TodoDto) => http.client.put(`/todos/${data.id}`, data);
