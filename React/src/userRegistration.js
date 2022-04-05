import axios from "axios";
const userRegistration = () => {
  const registerUser = (event) => {
    event.preventDefault();
    const userObject = {
      username: event.target.username.value,
      email: event.target.email.value,
      password: event.target.password.value,
      dob: event.target.dob,
    };
    axios.post("/user", userObject).then((res) => {
      console.log(res.data.status);
    });
  };
  return (
    <div className="text-center">
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
            type="email"
            name="email"
            placeholder="Enter Email"
            className="form-control w-75 m-auto mt-3 mb-4"
          />
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            className="form-control w-75 m-auto mt-3 mb-4"
          />
          <input
            type="date"
            name="dob"
            placeholder="Enter Date of Birth"
            className="form-control w-75 m-auto mt-3 mb-4"
          />
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
    </div>
  );
};
export default userRegistration;
