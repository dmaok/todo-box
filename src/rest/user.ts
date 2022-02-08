import {http} from "../services/http";
import {UserDto} from "./user.dto";

export const getUsers = (): Promise<UserDto[]> => http.client.get<UserDto[]>('/users');
