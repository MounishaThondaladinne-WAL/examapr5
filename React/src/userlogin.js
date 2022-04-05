import { useState } from "react";
import axios from "axios";
const Login = () => {
  const [details, setDetails] = useState([]);
  const [error, setError] = useState(0);
  const loginUser = (event) => {
    event.preventDefault();
    axios
      .get(
        `/userlogin/checklogin/${event.target.username.value}/${event.target.password.value}`
      )
      .then((res) => {
        console.log(res.data);
        setError(res.data.status);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const viewUser = () => {
    axios
      .get("/userlogin/loggeduser")
      .then((res) => {
        setDetails(res.data.data[0]);
        console.log(details);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="text-center">
      <form
        onSubmit={loginUser}
        className="w-50 m-auto p-3 mt-4 text-center border border-dark rounded"
      >
        <h1>Login</h1>
        <div className="form-group">
          <input
            type="text"
            name="username"
            placeholder="Enter Username"
            className="form-control w-75 m-auto mt-3 mb-4"
          />
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            className="form-control w-75 m-auto mt-3 mb-4"
          />
          <button className="btn btn-primary">Login</button>
          <p className="text-danger">{error}</p>
        </div>
      </form>
      {error ? (
        <div>
          <button onClick={viewUser}>Viewuser</button>
          <div>
            <p>username:{details.username}</p>
            <p>Password:{details.password}</p>
            <p>date_of_creation:{details.date_of_creation}</p>
          </div>
        </div>
      ) : (
        "incorrect login details"
      )}
    </div>
  );
};
export default Login;
