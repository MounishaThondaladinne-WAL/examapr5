const { body, validationResult } = require("express-validator");
const Todo = require("../models/todos");
function getTodos(req, res) {
  Todo.find((err, todos_list) => {
    if (err) {
      res.json(err);
    } else {
      res.json(todos_list);
    }
  });
}
const createTodo = [
  body("item")
    .trim()
    .isLength({ min: 3, max: 100 })
    .withMessage("min should be 3 and max should be 20")
    .escape()
    .withMessage("No special charcters allowed"),
  body("status")
    .trim()
    .isLength({ min: 8, max: 10 })
    .withMessage("min should be 8 and max should be 10"),
  (req, res) => {
    const errors = validationResult(req);
    console.log(errors);
    if (!errors.isEmpty()) {
      res.json({ status: 0, debug_data: errors });
    } else {
      let { item, status } = req.body;
      let todoObject = new Todo({ item, status });
      todoObject.save((error) => {
        if (error) {
          res.json(error);
        } else {
          res.json({ status: "adding todo complete" });
        }
      });
    }
  },
];
function deleteTodo(req, res) {
  Todo.findByIdAndDelete(req.params._id, function (err) {
    if (err) {
      res.json(err);
    } else {
      res.json(`todo with ${req.params._id} deleted`);
    }
  });
}
function editTodo(req, res) {
  const updateOb = req.body;
  Todo.findByIdAndUpdate(req.params._id, updateOb, function (err) {
    if (err) {
      res.json(err);
    } else {
      res.json(`todo with ${req.params._id} updated`);
    }
  });
}
module.exports = { getTodos, createTodo, deleteTodo, editTodo };
{
  /*const { body, validationResult } = require("express-validator");
let todos = [
  { item: "intial todo1", status: "complete" },
  { item: "intial todo2", status: "complete" },
];
function getTodos(req, res) {
  res.json(todos);
}
const createTodo = [
  body("item")
    .trim()
    .isLength({ min: 3, max: 100 })
    .withMessage("min should be 3 and max should be 20")
    .escape()
    .withMessage("No special charcters allowed"),
  body("status")
    .trim()
    .isLength({ min: 8, max: 10 })
    .withMessage("min should be 8 and max should be 10"),
  (req, res) => {
    const errors = validationResult(req);
    console.log(errors);
    if (!errors.isEmpty()) {
      res.json({ status: 0, debug_data: errors });
    } else {
      let { item, status } = req.body;
      console.log(req.body);
      todos.push({ item, status });
      res.json({ status: "adding todo complete" });
    }
  },
];
function deleteTodo(req, res) {
  console.log(req.params.indexToDelete);
  let newTodos = todos.filter((val, index) => {
    if (index === parseInt(req.params.indexToDelete)) {
      return false;
    } else {
      return true;
    }
  });
  todos = newTodos;
  res.json({ status: "Successfully deleted todos" });
}
module.exports = { getTodos, createTodo, deleteTodo };*/
}
