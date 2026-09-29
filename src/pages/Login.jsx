import {
  useState
} from "react";

import {
  useNavigate
} from "react-router-dom";


export default function Login() {

  const navigate = useNavigate();

  const [username, setUsername] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [error, setError] =
    useState("");


  const handleLogin = (e) => {

    e.preventDefault();


    if (
      username.trim() === "" ||
      password.trim() === ""
    ) {

      setError(
        "Please enter username and password."
      );

      return;
    }


    localStorage.setItem(
      "taskManagerLogin",
      "true"
    );


    navigate("/");

  };


  return (

    <div className="login-page">

      <div className="login-card">

        <div className="login-logo">
          TM
        </div>

        <h1>
          Welcome Back
        </h1>

        <p>
          Sign in to your Task Manager
        </p>


        <form
          onSubmit={handleLogin}
        >

          <label>
            Username
          </label>

          <input
            type="text"
            value={username}
            onChange={e =>
              setUsername(e.target.value)
            }
            placeholder="Enter username"
          />


          <label>
            Password
          </label>

          <input
            type="password"
            value={password}
            onChange={e =>
              setPassword(e.target.value)
            }
            placeholder="Enter password"
          />


          {error && (

            <div className="error-message">
              {error}
            </div>

          )}


          <button
            className="login-btn"
            type="submit"
          >
            Login
          </button>

        </form>


        <small>
          Demo login — any username/password
          will work.
        </small>

      </div>

    </div>

  );
}