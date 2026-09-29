import {
  NavLink,
  useNavigate
} from "react-router-dom";

export default function Navbar() {

  const navigate = useNavigate();


  const logout = () => {

    localStorage.removeItem(
      "taskManagerLogin"
    );

    navigate("/login");

  };


  return (

    <nav className="navbar">

      <div className="nav-brand">

        <div className="brand-icon">
          TM
        </div>

        <div>

          <h2>
            Task<span>Manager</span>
          </h2>

          <p>
            Stay organized
          </p>

        </div>

      </div>


      <div className="nav-links">

        <NavLink to="/">
          Dashboard
        </NavLink>

        <NavLink to="/tasks">
          Tasks
        </NavLink>

        <NavLink to="/add-task">
          + Add Task
        </NavLink>

        <NavLink to="/completed">
          Completed
        </NavLink>

      </div>


      <button
        className="logout-btn"
        onClick={logout}
      >
        Logout
      </button>

    </nav>

  );
}