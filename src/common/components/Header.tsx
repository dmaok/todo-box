import { Link } from "react-router-dom";
import './Header.css';

export const Header = () => {
  return <nav>
    <menu className="menu-list">
      <li>
        <Link to="/">All Todos</Link>
      </li>
      <li>
        <Link to="/create">Create new</Link>
      </li>
    </menu>
  </nav>
}
