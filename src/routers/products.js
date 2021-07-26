// untuk menghandle router product

const express = require('express')
const productController = require('../controller/products')


const productRouter = express.Router()
productRouter
.get('/product', productController.getList)
.get('/product/:id', productController.getDetails)
.post('/product', productController.insert)
.put('/product/:id', productController.update)
.delete('/product/:id', productController.delete)

module.exports = productRouter