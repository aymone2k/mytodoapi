const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
    createdAt: {type: Date, default: Date.now},
    todoName: {type: String, required:true},
    todoStatus: {type: Boolean, default:false},
    todoDescription:  {type: String, required:true},
    category:{type: mongoose.Schema.Types.ObjectId, ref: 'CategoryTodo'},
    author:{type: mongoose.Schema.Types.ObjectId, ref: 'User'}
}); 

module.exports = mongoose.model('Todo', todoSchema)