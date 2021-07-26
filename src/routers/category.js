// untuk menghandle router category

const express = require('express')
const categoryController = require('../controller/category')


const categoryRouter = express.Router()
categoryRouter
.get('/category', categoryController.getList)
.get('/category/:id', categoryController.getDetails)
.post('/category', categoryController.insert)
.put('/category/:id', categoryController.update)
.delete('/category/:id', categoryController.delete)

module.exports = categoryRouter