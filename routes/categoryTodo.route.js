const express = require('express');
const router = express.Router();
const categoryTodoController = require('../controllers/categoryTodo.controller')
const auth = require('../middleware/auth');
//get categoryTodoList d'un author
router.get('/:idAuthor', auth, categoryTodoController.categoryTodoList);
//get categoryTodo
router.get('/cat/:id', categoryTodoController.getCategoryTodo);
//create categoryTodo
router.post('/' , auth, categoryTodoController.addCategoryTodo);
//update categoryTodo
router.put('/:id', auth, categoryTodoController.updateCategoryTodo);


module.exports = router;   