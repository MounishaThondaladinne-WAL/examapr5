import { useState } from "react";
import axios from "axios";
const CreateFile = () => {
  const [msg, setMsg] = useState([""]);
  const createFile = (event) => {
    event.preventDefault();
    axios
      .get(
        `/files/createfile/${event.target.filename.value}/${event.target.filecontent.value}`
      )
      .then((res) => {
        console.log(res.data);
        setMsg(res.data);
      });
  };
  return (
    <div className="text-center">
      <form
        onSubmit={createFile}
        className="w-50 m-auto p-3 mt-4 text-center border border-dark rounded"
      >
        <h1> CREATE FILE</h1>
        <div className="form-group">
          <input
            type="text"
            name="filename"
            placeholder="File Name"
            className="form-control w-75 m-auto mt-3 mb-4 text-center"
          />
          <textarea
            type="text"
            name="filecontent"
            placeholder="File Content"
            className="form-control w-75 m-auto mt-3 mb-4 text-center"
          ></textarea>
          <button className="btn btn-primary">Create File</button>
          <h3 className="p-3 text-secondary">{msg}</h3>
        </div>
      </form>
    </div>
  );
};
export default CreateFile;
