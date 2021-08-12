// untuk menghandle router product

const express = require('express');
const usersController = require('../controller/users');
const midauth = require('../midleware/authentication');

const usersRouter = express.Router();
usersRouter
  .get('/users', midauth, usersController.getList)
  .get('/login', usersController.login)
  .get('/users/:id', midauth, usersController.getDetails)
  .post('/users', midauth, usersController.insert)
  .post('/register', usersController.register)
  .put('/users/:id', midauth, usersController.update)
  .delete('/users/:id', midauth, usersController.delete);
// midauth

module.exports = usersRouter;
