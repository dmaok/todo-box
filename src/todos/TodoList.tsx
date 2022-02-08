import {useContext, useEffect, useState} from "react";
import {TodoItem} from "./TodoItem";
import {TodoDto} from "../rest/todo.dto";
import {AppStoreContext} from "../store/app.store";
import {loadTodos} from "../store/todos.actions";
import {UserDto} from "../rest/user.dto";

export const TodoList = () => {
  const [todosRawList, updateTodosRawList] = useState<TodoDto[]>([]);
  const [users, updateUsers] = useState<UserDto[]>([]);
  const context = useContext(AppStoreContext);

  useEffect(() => {
    loadTodos()(context.dispatch);
  }, [context.dispatch]);
  useEffect(() => {
    updateTodosRawList(context.appState.todos);
  }, [context.appState.todos]);
  useEffect(() => {
    const usersMap = context.appState.users.reduce((acc: UserDto[], user) => {
      acc[user.id] = user;
      return acc;
    }, []);
    updateUsers(usersMap);
  }, [context.appState.users]);

  return (
    <div>
      {todosRawList.map(todoEl => (
         <TodoItem
           key={todoEl.id}
           user={users[todoEl.userId]}
           content={todoEl}
           remove={(todoId: number) => {}}
           mark={(todo: TodoDto) => {}}
         />
      ))}
    </div>
  )
}
