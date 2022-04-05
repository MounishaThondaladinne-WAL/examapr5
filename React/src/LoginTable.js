import axios from "axios";
import { useState } from "react";
import useLocalStorage from "use-local-storage";
const LoginTable = () => {
  const [msg, setmsg] = useState("");
  const [status, setStatus] = useState(false);
  const [token, setToken] = useLocalStorage("token", "");
  const LoginUser = (event) => {
    event.preventDefault();
    const userObject = {
      username: event.target.username.value,
      password: event.target.password.value,
    };
    axios.post("/register/login", userObject).then((res) => {
      console.log(res.data);
      setStatus(true);
      setmsg(res.data.data);
      setToken(res.data.token);
    });
  };
  return (
    <div className="text-center">
      {status ? <h3>{msg}</h3> : ""}
      <form
        onSubmit={LoginUser}
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
        </div>
      </form>
    </div>
  );
};
export default LoginTable;
