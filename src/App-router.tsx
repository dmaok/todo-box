import {Route, Routes } from "react-router-dom"
import {TodoList} from "./todos/TodoList";
import {CreateTodo} from "./todos/CreateTodo";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<TodoList />}/>
      <Route path="/create" element={<CreateTodo />}/>
    </Routes>
  );
}
