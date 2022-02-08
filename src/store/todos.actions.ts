import {TodoDto} from "../rest/todo.dto";
import {Dispatch} from "react";
import {getTodosRequest, updateTodoRequest} from "../rest/todo";

export const LOAD_TODOS_START = 'LOAD_TODOS_START';
export const LOAD_TODOS_SUCCESS = 'LOAD_TODOS_SUCCESS';
export const UPDATE_TODOS_START = 'UPDATE_TODOS_START';
export const UPDATE_TODOS_SUCCESS = 'UPDATE_TODOS_SUCCESS';

const loadTodosStartAction = () => ({
  type: LOAD_TODOS_START
});

const loadTodosSuccessAction = (payload: TodoDto[]) => ({
  type: LOAD_TODOS_SUCCESS,
  payload
});

const updateTodoStartAction = () => ({
  type: UPDATE_TODOS_START
});

const updateTodoSuccessAction = (payload: TodoDto) => ({
  type: UPDATE_TODOS_SUCCESS,
  payload
})

export function loadTodos() {
  return async (dispatch: Dispatch<any>) => {
    dispatch(loadTodosStartAction());
    const todos = await getTodosRequest();
    dispatch(loadTodosSuccessAction(todos));
  }
}

export function updateTodo(update: TodoDto) {
  return async (dispatch: Dispatch<any>) => {
    dispatch(updateTodoStartAction());
    await updateTodoRequest(update);
    dispatch(updateTodoSuccessAction(update!));
  }
}
