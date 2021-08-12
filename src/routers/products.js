// untuk menghandle router product

const express = require('express');
const productController = require('../controller/products');
const midauth = require('../midleware/authentication');

const productRouter = express.Router();
productRouter
  .get('/product', midauth, productController.getList)
  .get('/product/:id', midauth, productController.getDetails)
  .post('/product', midauth, productController.insert)
  .put('/product/:id', midauth, productController.update)
  .delete('/product/:id', midauth, productController.delete);

module.exports = productRouter;
