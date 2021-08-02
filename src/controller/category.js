// hanya menghendel data dari table category
// const db = require('../config/db')

const categoryModel = require('../models/category');
const { success, failed } = require('../helpers/respon');

const category = {
  getList: (req, res) => {
    try {
      const { query } = req;
      const search = query.search === undefined ? '' : query.search;
      const field = query.field === undefined ? 'id' : query.field;
      const typeSort = query.sort === undefined ? '' : query.sort;
      const limit = query.limit === undefined ? 50 : query.limit;
      // eslint-disable-next-line eqeqeq
      const offset = query.page === undefined || query.page == 1 ? 0 : (query.page - 1) * limit;
      categoryModel.getList(search, field, typeSort, limit, offset).then(async (result) => {
        const allData = await categoryModel.getAll();
        const output = {
          data: result,
          totalPage: Math.ceil(allData.length / limit),
          search,
          limit,
          page: query.page,
        };
        success(res, output, 'succes');
        // res.json(result)
      }).catch((err) => {
        failed(res, 500, err);
        // res.json(err)
      });
    } catch (error) {
      failed(res, 401);
      // res.json(error)
    }
  },

  getDetails: (req, res) => {
    try {
      const { id } = req.params;
      categoryModel.getDetails(id).then((result) => {
        success(res, result, 'succes');
      }).catch((err) => {
        failed(res, 500, err);
      });
    } catch (error) {
      failed(res, 401);
    }
  },
  insert: (req, res) => {
    try {
      const { body } = req;
      categoryModel.insert(body).then((result) => {
        success(res, result, 'succes');
      }).catch((err) => {
        failed(res, 500, err);
      });
    } catch (error) {
      failed(res, 401);
    }
  },
  update: (req, res) => {
    try {
      const { id } = req.params;
      const { body } = req;
      categoryModel.update(body, id).then((result) => {
        success(res, result, 'succes');
      }).catch((err) => {
        failed(res, 500, err);
      });
    } catch (error) {
      failed(res, 401);
    }
  },
  delete: (req, res) => {
    try {
      const { id } = req.params;
      categoryModel.delete(id).then((result) => {
        success(res, result, 'succes');
      }).catch((err) => {
        failed(res, 500, err);
      });
    } catch (error) {
      failed(res, 401);
    }
  },
};

module.exports = category;
