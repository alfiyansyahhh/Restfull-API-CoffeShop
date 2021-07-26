// untuk menghandle router product

const express = require('express')
const usersController = require('../controller/users')


const usersRouter = express.Router()
usersRouter
.get('/users', usersController.getList)
.get('/users/:id', usersController.getDetails)
.post('/users', usersController.insert)
.put('/users/:id', usersController.update)
.delete('/users/:id', usersController.delete)

module.exports = usersRouter