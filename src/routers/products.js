// untuk menghandle router product

const express = require('express');
const productController = require('../controller/products');
const midaud = require('../midleware/authentication');

const productRouter = express.Router();
productRouter
  .get('/product', midaud, productController.getList)
  .get('/product/:id', midaud, productController.getDetails)
  .post('/product', midaud, productController.insert)
  .put('/product/:id', midaud, productController.update)
  .delete('/product/:id', midaud, productController.delete);

module.exports = productRouter;
