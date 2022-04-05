import { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
const EditUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dob, setDob] = useState("");
  const urlParams = useParams();
  const username = urlParams.username;
  const navigate = useNavigate();
  let getToken = localStorage.getItem("token");
  getToken = getToken.replace('"', "");
  getToken = getToken.replace('"', "");
  const updateData = (event) => {
    event.preventDefault();
    const userObject = { username, email, password, dob };
    axios
      .put(`/register/edit/${username}`, userObject, {
        headers: {
          token: getToken,
        },
      })
      .then((res) => {
        console.log(res.data);
        navigate("/members");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="container-fluid text-center">
      <h1 className="mt-3">Edit Details</h1>
      <form className="form-group" onSubmit={updateData}>
        <b className="subHeading">Name : </b>
        <input
          className="form-control d-inline-flex w-50"
          type="text"
          name="name"
          placeholder="Enter Name"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <br />
        <b className="subHeading">Email : </b>
        <input
          className="form-control d-inline-flex w-50"
          type="email"
          name="email"
          placeholder="Enter User Name"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <br />
        <b className="subHeading">Password : </b>
        <input
          className="form-control d-inline-flex w-50"
          type="password"
          name="password"
          placeholder="Enter Password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <br />
        <b className="subHeading">Date of Birth : </b>
        <input
          className="form-control d-inline-flex w-50"
          type="date"
          name="dob"
          value={dob}
          onChange={(event) => {
            setDob(event.target.value);
          }}
        />
        <br />
        <button className="btn btn-outline-primary">
          <b>Update Details</b>
        </button>
        <br />
      </form>
    </div>
  );
};
export default EditUser;
