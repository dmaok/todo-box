import {getTodosRequest} from "../rest/todo";
import {useEffect, useState} from "react";
import {TodoItem} from "./TodoItem";
import { TodoDto } from "../rest/todo.dto";

export const TodoList = () => {
  const [todosRawList, updateTodosRawList] = useState<TodoDto[]>([]);

  useEffect(() => {
    getTodosRequest()
      .then(r => {
        console.log(r)
        updateTodosRawList(r);
      })
      .catch(console.log);
  }, []);

  return (
    <div>
      {todosRawList.map(todoEl => {
        return <TodoItem key={todoEl.id} content={todoEl} remove={(todoId: number) => {}} mark={(todo: TodoDto) => {}} />
      })}
    </div>
  )
}
