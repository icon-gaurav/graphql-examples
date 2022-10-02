const mongoose = require("mongoose");
const timestamp = require("mongoose-timestamp");
const mongoosePaginate = require('mongoose-paginate-v2');

const todoSchema = mongoose.Schema({
    title:String,
});

todoSchema.plugin(timestamp);
todoSchema.plugin(mongoosePaginate);
const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;
