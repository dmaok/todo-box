import {http} from "../services/http";

export const getTodosRequest = (): Promise<any> => {
  return http.client.get('/todos');
}
