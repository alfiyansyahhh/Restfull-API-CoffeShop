// hanya menghendel data dari table users
// const db = require('../config/db')

const bcrypt = require('bcrypt');
const usersModel = require('../models/users');
const { success, failed } = require('../helpers/respon');

const users = {
  register: (req, res) => {
    try {
      const { body } = req;
      bcrypt.hash(body.password, 10, (err, hash) => {
        // Store hash in your password DB.
        if (err) {
          // console.log(err);
        } else {
          usersModel.register(body, hash).then((result) => {
            success(res, result, 'succes');
          }).catch((err1) => {
            res.json(err1);
          });
          // console.log(hash);
        }
      });
    } catch (error) {
      failed(res, 401);
    }
  },
  login: (req, res) => {
    try {
      const { body } = req;
      usersModel.cekUsername(body).then((result) => {
        if (result.length <= 0) {
          res.json('username salah');
        } else {
          const passwordHash = result[0].password;
          const test = bcrypt.compareSync(body.password, passwordHash);
          console.log(test);
          res.json(test);
          console.log(body.password);
          console.log(passwordHash);
        }
      }).catch((err1) => {
        res.json(err1);
      });
    } catch (error) {
      failed(res, 401);
    }
  },
  getList: (req, res) => {
    try {
      const { query } = req;
      const search = query.search === undefined ? '' : query.search;
      const field = query.field === undefined ? 'id' : query.field;
      const typeSort = query.sort === undefined ? '' : query.sort;
      const limit = query.limit === undefined ? 50 : query.limit;
      // eslint-disable-next-line eqeqeq
      const offset = query.page === undefined || query.page == 1 ? 0 : (query.page - 1) * limit;
      usersModel.getList(search, field, typeSort, limit, offset).then(async (result) => {
        // eslint-disable-next-line no-undef
        allData = await usersModel.getAll();
        const output = {
          data: result,
          // eslint-disable-next-line no-undef
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
      usersModel.getDetails(id).then((result) => {
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
      usersModel.insert(body).then((result) => {
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
      usersModel.update(body, id).then((result) => {
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
      usersModel.delete(id).then((result) => {
        success(res, result, 'succes');
      }).catch((err) => {
        failed(res, 500, err);
      });
    } catch (error) {
      failed(res, 401);
    }
  },
};

module.exports = users;
