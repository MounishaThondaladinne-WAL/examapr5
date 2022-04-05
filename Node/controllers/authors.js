const Author = require("../models/author");
function getAuthors(req, res) {
  Author.find((err, authors_list) => {
    if (err) {
      res.json(err);
    } else {
      res.json(authors_list);
    }
  });
}
function createAuthor(req, res) {
  let { first_name, last_name, dob, dod } = req.body;
  let AuthorObject = new Author({ first_name, last_name, dob, dod });
  AuthorObject.save((error) => {
    if (error) {
      res.json(error);
    } else {
      res.json({ status: "adding author complete" });
    }exports.getBooks = (request, response) => {
      Book.find((err, books_list) => {
        if (err) {
          response.json(err);
        } else {
          response.json({ status: 1, data: { books_list } });
        }
      });
    };
  });
}
function deleteAuthor(req, res) {
  Author.findByIdAndDelete(req.params._id, function (err) {
    if (err) {
      res.json(err);
    } else {
      res.json(`Author with ${req.params._id} deleted`);
    }
  });
}
module.exports = { getAuthors, createAuthor, deleteAuthor };
