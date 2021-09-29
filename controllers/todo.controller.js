const Todo = require('../models/todo.model');
const mongoose = require('mongoose');

module.exports={
//get todoList 
    todoList:(req, res, next)=>{
        const idAuthor = req.params.idAuthor;
        Todo.find({author: idAuthor})
        .then((todos)=>{res.status(200).json({status:200, message:todos})})
        .catch((err)=>{res.status(404).json(err.message)})
    },

//create todo
    addTodo:(req, res, next)=>{
       
        const todoAdd = new Todo({
            ...req.body,
            author: req.body.author,
            createdAt:Date.now(),
        })
        todoAdd.save()
        .then((todo)=>{res.status(201).json({status:201, message:todo})})
        .catch((err)=>{res.status(409).json(err.message)})
    },
//read todo
    getOneTodo:(req, res, next)=>{
        const idTodo = req.params.id;
        Todo.findOne({_id: idTodo})
        .then((todo)=>{res.status(200).json({status:200, message:todo})})
        .catch((err)=>{res.status(400).json(err.message)}) 
    },

//update todo
    updateTodo:(req, res, next)=>{
        const idTodo =  req.params.id;
        
        if (!mongoose.Types.ObjectId.isValid(idTodo)) return res.status(404).send(`nous n'avont pas trouvé la tache N°: ${idTodo}`);
        
        Todo.updateOne({_id: idTodo},{...req.body, _id: idTodo}, (err, todo)=>{
           
            if(err){
                return res.status(500).json({message: err.message})
            }
            return res.status(200).json({status:200, message: `la tache ${todo.todoName} a été modifiée!`})
        })
      },

//delete todo
    deleteTodo:(req, res, next)=>{
        const idTodo = req.params.id;
        if (!mongoose.Types.ObjectId.isValid(idTodo)) return res.status(404).send(`nous n'avont pas trouvé la tache N°: ${idTodo}`);
      
        Todo.findByIdAndRemove(idTodo)
        .then((todo) =>{res.status(200).json({status:200, message: `la tache ${todo.todoName} a été supprimée!`})} )
        .catch((err) =>{res.status(500).json({message: err.message})})
    },

}