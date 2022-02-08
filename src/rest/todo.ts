import {http} from "../services/http";
import {TodoDto} from "./todo.dto";

export const getTodosRequest = (): Promise<TodoDto[]> => http.client.get('/todos');
