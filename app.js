const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config();

require('./middleware/dataBase').config()


const userRoutes = require('./routes/user.route');
const todoRoutes = require('./routes/todo.route');
const categoryTodoRoutes = require('./routes/categoryTodo.route');


const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });
 

app.use('/api/user', userRoutes)
app.use('/api/todo', todoRoutes)
app.use('/api/categoryTodo', categoryTodoRoutes)

module.exports = app;