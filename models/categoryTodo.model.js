const mongoose = require('mongoose');

const categoryTodoSchema = mongoose.Schema({
    createdAt:Date,
    categoryName: {type: String, required:true, unique: true, trim: true},
    categoryColor:  {type: String, default:'black'},
    author:{type: mongoose.Schema.Types.ObjectId, ref: 'User'}
});

module.exports = mongoose.model('CategoryTodo', categoryTodoSchema)