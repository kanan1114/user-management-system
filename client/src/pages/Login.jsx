import { Link } from "react-router-dom";
import axios from "axios";
function Login() {
  return (
    <div className="container mt-5">

      <div
        className="card shadow-lg p-5 mx-auto border-0"
        style={{ maxWidth: "500px" }}
      >

        <h2 className="text-center mb-4">
          User Management System
        </h2>

        <input
          type="email"
          className="form-control mb-3"
          placeholder="Email"
        />

        <input
          type="password"
          className="form-control mb-3"
          placeholder="Password"
        />

        <button
  className="btn btn-primary w-100"
  onClick={async () => {

    try {

      const response = await axios.post(
        "http://localhost:5000/api/login",
        {
          email: "test@test.com"
        }
      );

      localStorage.setItem(
  "token",
  response.data.token
);

console.log(response.data.token);

alert("Login Successful");

      alert("JWT Generated");

    } catch (error) {

      console.log(error);

    }

  }}
>
  Login
</button>
        <div className="text-center mt-4">

          <p>
            Don't have an account?
          </p>

          <Link
            to="/register"
            className="btn btn-outline-success"
          >
            Create Account
          </Link>

        </div>

      </div>

    </div>
  );
}

export default Login;