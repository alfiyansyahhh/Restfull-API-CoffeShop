// untuk menghandle router category

const express = require('express');
const categoryController = require('../controller/category');
const midauth = require('../midleware/authentication');

const categoryRouter = express.Router();
categoryRouter
  .get('/category', midauth, categoryController.getList)
  .get('/category/:id', midauth, categoryController.getDetails)
  .post('/category', midauth, categoryController.insert)
  .put('/category/:id', midauth, categoryController.update)
  .delete('/category/:id', midauth, categoryController.delete);

module.exports = categoryRouter;
