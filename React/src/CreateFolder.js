import { useState } from "react";
import axios from "axios";
const CreateFolder = () => {
  const [msg, setMsg] = useState([""]);
  const createFolder = (event) => {
    event.preventDefault();
    axios
      .get(`/files/createfolder/${event.target.foldername.value}`)
      .then((res) => {
        console.log(res.data);
        setMsg(res.data);
      });
  };
  return (
    <div className="text-center">
      <form
        onSubmit={createFolder}
        className="w-50 m-auto p-3 mt-4 text-center border border-dark rounded"
      >
        <h1> CREATE FOLDER</h1>
        <div className="form-group">
          <input
            type="text"
            name="foldername"
            placeholder="Folder Name"
            className="form-control w-75 m-auto mt-3 mb-4 text-center"
          />
          <button className="btn btn-primary">Create Folder</button>
          <h3 className="p-3 text-secondary">{msg}</h3>
        </div>
      </form>
    </div>
  );
};
export default CreateFolder;
