import {SetStateAction} from "react";
import {IAppState} from "./app.store";
import {LOAD_USER_SUCCESS, LOAD_USER_START} from "./user.actions";
import {LOAD_TODOS_START, LOAD_TODOS_SUCCESS, UPDATE_TODOS_SUCCESS} from "./todos.actions";

export const appReducer = (state: IAppState, action: SetStateAction<any>) => {
  switch (action.type) {
    case LOAD_USER_START:
    case LOAD_TODOS_START:
      return state;
    case LOAD_USER_SUCCESS:
      return {
        ...state,
        users: action.payload
      }
    case LOAD_TODOS_SUCCESS:
      return {
        ...state,
        todos: action.payload
      }
    case UPDATE_TODOS_SUCCESS:
      const newTodos = [...state.todos];
      newTodos[state.todos.findIndex(todo => todo.id === action.payload.id)] = action.payload;
      return {
        ...state,
        todos: newTodos
      };
    default:
      return state;
  }
}
