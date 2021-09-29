const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todo.controller')
const auth = require('../middleware/auth');


//get todoList d'un author
router.get('/:idAuthor',auth, todoController.todoList);
//create todo
router.post('/',auth, todoController.addTodo)
//read todo
router.get('/byid/:id',auth, todoController.getOneTodo)
//update todo
router.put('/:id',auth, todoController.updateTodo)
//delete todo
router.delete('/:id',auth, todoController.deleteTodo)

module.exports = router;   