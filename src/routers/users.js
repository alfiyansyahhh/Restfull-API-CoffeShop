// untuk menghandle router product

const express = require('express');
const usersController = require('../controller/users');
const midaud = require('../midleware/authentication');

const usersRouter = express.Router();
usersRouter
  .get('/users', midaud, usersController.getList)
  .get('/login', usersController.login)
  .get('/users/:id', midaud, usersController.getDetails)
  .post('/users', midaud, usersController.insert)
  .post('/register', usersController.register)
  .put('/users/:id', midaud, usersController.update)
  .delete('/users/:id', midaud, usersController.delete);

module.exports = usersRouter;
