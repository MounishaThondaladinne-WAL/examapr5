const { body, validationResult } = require("express-validator");
const res = require("express/lib/response");
const Forum = require("../models/forum");
function getForums(req, res) {
  Forum.find((err, forums_list) => {
    if (err) {
      res.json(err);
    } else {
      res.json(forums_list);
    }
  });
}
const createForum = [
  body("author")
    .isAlphanumeric()
    .withMessage("No special Characters are allowed"),
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.json({ status: 0, debug_data: errors });
    } else {
      let { title, doc, forumbody, author } = req.body;
      let forumObject = new Forum({ title, doc, forumbody, author });
      forumObject.save((err) => {
        if (err) {
          res.json(err);
        } else {
          res.json("Forum Added Successfully");
        }
      });
    }
  },
];
const editForum = [
  body("title")
    .isLength({ min: 10, max: 100 })
    .withMessage("Title should be min 10 and max 100 chars"),
  body("doc").isDate().withMessage("doc should be date"),
  body("forumbody")
    .isLength({ min: 50, max: 500 })
    .withMessage("forumbody should be min 50 and max 500 chars"),
  body("author")
    .isLength({ min: 5, max: 50 })
    .withMessage("author should be min 5 and max 50 chars")
    .isAlphanumeric()
    .withMessage("No special Characters are allowed"),
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.json({ status: 0, debug_data: errors });
    } else {
      let newData = { $set: req.body };
      console.log(newData);
      Forum.findByIdAndUpdate(req.params._id, newData, function (err) {
        if (err) {
          res.json(err);
        } else {
          res.json(`Forum with id ${req.params._id} eidted successfully`);
        }
      });
    }
  },
];
function deleteForum(req, res) {
  Forum.findByIdAndDelete(req.params._id, function (err) {
    if (err) {
      res.json(err);
    } else {
      res.json(`Forum with ${req.params._id} deleted`);
    }
  });
}
module.exports = { getForums, createForum, editForum, deleteForum };
