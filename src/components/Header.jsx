import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div id="header">
      <div className="name">#todo</div>
      <div className="menu">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <span>All</span>
          <div></div>
        </NavLink>

        <NavLink
          to="/active"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <span>Active</span>
          <div></div>
        </NavLink>

        <NavLink
          to="/completed"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <span>Completed</span>
          <div></div>
        </NavLink>
      </div>
      <hr />
    </div>
  );
};

export default Header;
