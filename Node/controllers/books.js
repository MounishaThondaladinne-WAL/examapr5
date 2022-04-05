const Book = require("../models/book");
exports.createBook = (request, response) => {
  const { name, description, author } = request.body;
  let bookOb = new Book({ name, description, author });
  bookOb.save((err) => {
    if (err) {
      response.json(err);
    } else {
      response.json({ status: 1, data: { msg: "book created" } });
    }
  });
};
exports.getBooks = (request, response) => {
  Book.find((err, books_list) => {
    if (err) {
      response.json(err);
    } else {
      response.json({ status: 1, data: { books_list } });
    }
  });
};
exports.getBooksWithAuthor = (request, response) => {
  Book.find()
    .populate("author")
    .exec((err, books_list) => {
      if (err) {
        response.json(err);
      } else {
        response.json({ status: 1, data: { books_list } });
      }
    });
};
exports.getBookWithCondition = (request, response) => {
  Book.find({ name: request.params.name }).exec((err, books_list) => {
    if (err) {
      response.json(err);
    } else {
      response.json({ status: 1, data: { books_list } });
    }
  });
};
