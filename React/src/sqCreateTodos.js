import axios from "axios";
import { useState } from "react";
const SqCreateTodos = () => {
  const [todos, setTodos] = useState([]);
  const AddTodo = (event) => {
    event.preventDefault();
    const TodoObject = {
      title: event.target.todo.value,
      description: event.target.description.value,
      status: event.target.status.value,
    };
    axios.post("/sqtodos/create", TodoObject).then((res) => {
      console.log(res.data);
    });
  };
  axios.get("/sqtodos").then((res) => {
    setTodos(res.data);
  });
  return (
    <div className="text-center">
      <form
        onSubmit={AddTodo}
        className="w-50 m-auto p-3 mt-4 text-center border border-dark rounded"
      >
        <h1>Todo App</h1>
        <div className="form-group">
          <input
            type="text"
            name="todo"
            placeholder="Enter Todo item"
            className="form-control w-75 m-auto mt-3 mb-4"
            required
          />
          <textarea
            name="description"
            placeholder="Todo Description"
            className="form-control w-75 m-auto mt-3 mb-4"
            required
          />
          <select className="form-select w-75 m-auto mt-3 mb-4 " name="status">
            <option selected>Status</option>
            <option value="1">Complete</option>
            <option value="0">Incomplete</option>
          </select>
          <button className="btn btn-primary">AddTodo</button>
        </div>
      </form>
      <div>
        {todos.map((val) => {
          return (
            <div className=" w-50 m-auto border border-dark rounded">
              <p>Status:{val.status ? "complete" : "Incomplete"}</p>
              <p>Title:{val.title}</p>
              <p>Description:{val.description}</p>
              <p>createdat:{val.createdAt}</p>
              <p>Updatedat:{val.updatedAt}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default SqCreateTodos;
