import axios from "axios";
import { useState } from "react";

function Modify() {
  const [content, setContent] = useState(["No Content Available"]);
  const [username, setUsername] = useState();
  const getContent = (event) => {
    event.preventDefault();
    setUsername(event.target.filename.value);
    axios
      .get(`/files/readfile/${event.target.filename.value}`)
      .then((res) => setContent(res.data))
      .catch((error) => console.log(error));
  };
  const modifyContent = () => {
    axios
      .get(`/files/modify/${username}/${content}`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="text-center">
      <form
        onSubmit={getContent}
        className="w-50 m-auto p-3 mt-4 text-center border border-dark rounded"
      >
        <h1>File Management </h1>
        <div>
          <input
            type="text"
            name="filename"
            placeholder="Enter filename"
            className="form-control w-75 m-auto mt-3 mb-4 text-center"
          />
          <button className="btn btn-primary">Get File Content</button>
          <textarea
            name="filecontent"
            placeholder="Enter the file name for file content"
            className="form-control w-75 m-auto mt-3 mb-4 text-center"
            value={content}
            onChange={(event) => setContent(event.target.value)}
          ></textarea>
          <button className="btn btn-primary" onClick={() => modifyContent()}>
            Modify
          </button>
        </div>
      </form>
    </div>
  );
}
export default Modify;
