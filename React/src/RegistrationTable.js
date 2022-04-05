import axios from "axios";
import { useState } from "react";
const RegistrationTable = () => {
  const [msg, setmsg] = useState("");
  const [status, setStatus] = useState(false);
  const registerUser = (event) => {
    event.preventDefault();
    const userObject = {
      username: event.target.username.value,
      password: event.target.password.value,
    };
    axios.post("/register", userObject).then((res) => {
      console.log(res.data);
      console.log(res.data.msg);
      setStatus(true);
      setmsg(res.data.msg);
    });
  };
  return (
    <div className="text-center">
      {status ? <h3>{msg}</h3> : ""}
      <form
        onSubmit={registerUser}
        className="w-50 m-auto p-3 mt-4 text-center border border-dark rounded"
      >
        <h1>Registration Form</h1>
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
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
    </div>
  );
};
export default RegistrationTable;
