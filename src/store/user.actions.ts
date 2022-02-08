import {getUsers} from "../rest/user";
import {Dispatch} from "react";
import {UserDto} from "../rest/user.dto";

export const LOAD_USER_START = 'LOAD_USER_START';
export const LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS';

const startLoadingUsersAction = () => ({
  type: LOAD_USER_START
});

const proceedLoadingUsersAction = (payload: UserDto[]) => ({
  type: LOAD_USER_SUCCESS,
  payload
});

export function loadUsers() {
  return async (dispatch: Dispatch<any>) => {
    dispatch(startLoadingUsersAction());
    const users = await getUsers();
    dispatch(proceedLoadingUsersAction(users));
  }
}


