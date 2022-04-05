import { useEffect, useState } from "react";
import axios from "axios";
import { addListener } from "@reduxjs/toolkit";
const FolderContent = () => {
  const [files, setFiles] = useState([]);
  useEffect(() => {
    getFiles();
  });
  const getFiles = () => {
    axios.get(`/files/readdirectory`).then((res) => {
      setFiles(res.data);
    });
  };
  const deleteFile = (filename) => {
    axios.get(`/files/deletefile/${filename}`).then((res) => {
      console.log(res.data);
    });
    getFiles();
  };
  return (
    <div className="text-center">
      <ul className="list-group">
        {files.map((val) => {
          return (
            <li className="list-group-item w-50 m-auto">
              <p className="d-inline-block w-25 m-2">{val}</p>
              <button
                className="btn btn-danger w-25 m-2"
                onClick={() => {
                  deleteFile(val);
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default FolderContent;
