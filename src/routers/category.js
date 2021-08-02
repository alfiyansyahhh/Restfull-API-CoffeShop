// untuk menghandle router category

const express = require('express');
const categoryController = require('../controller/category');
const midaud = require('../midleware/authentication');

const categoryRouter = express.Router();
categoryRouter
  .get('/category', midaud, categoryController.getList)
  .get('/category/:id', midaud, categoryController.getDetails)
  .post('/category', midaud, categoryController.insert)
  .put('/category/:id', midaud, categoryController.update)
  .delete('/category/:id', midaud, categoryController.delete);

module.exports = categoryRouter;
