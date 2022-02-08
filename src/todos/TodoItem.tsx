import {TodoDto} from "../rest/todo.dto";
import './TodoItem.css';
import {Link} from "react-router-dom";
import {MdClear, MdCreate, MdOutlineCheckBox, MdOutlineCheckBoxOutlineBlank} from "react-icons/md";
import {UserDto} from "../rest/user.dto";

interface ITodoItemParams {
  user: UserDto,
  content: TodoDto,
  remove: (todoId: number) => void,
  mark: (todoItem: TodoDto) => void,
}

export const TodoItem = ({content, remove, mark, user}: ITodoItemParams) => {
  const userInitial = user?.name.split(' ').slice(0, 2).map(str => str[0]).join('');
  return <div className={`todo-element ${content.completed ? 'completed' : ''}`}>
    <div className="todo-content">
      <button className="btn" onClick={() => mark(content)}>
        {content.completed ? <MdOutlineCheckBox /> : <MdOutlineCheckBoxOutlineBlank/>}
      </button>
      <div className="todo-user">
        {userInitial}
      </div>
      <div className="todo-title">
        {content.title}
      </div>
    </div>
    <div className="todo-controls">
      <button className="btn" onClick={() => remove(content.id)}>
        <MdClear/>
      </button>
      <Link className="btn" to={'/edit/' + content.id}>
        <MdCreate/>
      </Link>
    </div>
  </div>
}
