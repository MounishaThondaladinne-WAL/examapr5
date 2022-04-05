const { body, validationResult } = require("express-validator");
let tweets = [
  {
    title: "Tweet1",
    body: "Node",
    doc: "20-12-2022",
    author: "Mounisha",
    category: "entertainment",
  },
];
function getTweets(req, res) {
  res.json(tweets);
}
const createTweet = [
  body("title")
    .trim()
    .isLength({ min: 5, max: 50 })
    .withMessage("between 5 and 50 characters")
    .isAlphanumeric()
    .withMessage("No special charcters allowed"),
  body("body")
    .trim()
    .isLength({ min: 5, max: 200 })
    .withMessage("between 5 and 200 characters")
    .escape(),
  body("author")
    .trim()
    .isLength({ min: 5, max: 100 })
    .withMessage("between 5 and 200 characters")
    .isAlphanumeric()
    .withMessage("No special charcters allowed")
    .escape(),
  (req, res) => {
    const errors = validationResult(req);
    console.log(errors);
    if (!errors.isEmpty()) {
      res.json({ status: 0, debug_data: errors });
    } else {
      let { title, body, doc, author, category } = req.body;
      console.log(req.body);
      tweets.push({ title, body, doc, author, category });
      res.json({ status: "adding tweet complete" });
    }
  },
];
function deleteTweet(req, res) {
  console.log(req.params.indexToDelete);
  let newTweets = tweets.filter((val, index) => {
    if (index === parseInt(req.params.indexToDelete)) {
      return false;
    } else {
      return true;
    }
  });
  tweets = newTweets;
  res.json({ status: "Successfully deleted tweet" });
}
function deleteAll(req, res) {
  tweets = [];
  res.json(" delete all");
}
module.exports = { getTweets, createTweet, deleteTweet, deleteAll };
