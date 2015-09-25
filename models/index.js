var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/mongo_zoo_app");

module.exports.Comment = require("./comment");
module.exports.User = require("./user");
module.exports.Post = require("./post");