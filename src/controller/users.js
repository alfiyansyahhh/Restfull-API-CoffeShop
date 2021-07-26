//hanya menghendel data dari table users
// const db = require('../config/db')

const usersModel = require('../models/users')
const {success,failed } = require('../helpers/respon')
const users = {
    getList: (req,res) => {
        try {
            const query = req.query
            const search = query.search === undefined ? "" : query.search
            const field = query.field === undefined ? "id" : query.field
            const typeSort = query.sort === undefined ? "" : query.sort
            const limit = query.limit === undefined ? 50 : query.limit
            const offset = query.page === undefined || query.page == 1 ? 0 : (query.page-1)*limit
            usersModel.getList(search,field,typeSort,limit,offset).then(async (result) => {
                allData = await usersModel.getAll()
                const output = {
                    data: result,
                    totalPage:  Math.ceil(allData.length/limit),
                    search: search,
                    limit: limit,
                    page: query.page
                }
                success(res,output,"succes")
                // res.json(result)
            }).catch((err) => {
                failed(res, 500,err)
                // res.json(err)
            })
        } catch (error) {
            failed(res, 401)
            // res.json(error)
        }
    },

    getDetails: (req,res) => {
        try {
            const id = req.params.id
            usersModel.getDetails(id).then((result) => {
                res.json(result)
            }).catch((err) => {
                res.json(err)
            })
        } catch (error) {
            res.json(error)
        }
    },
    insert: (req,res) => {
        try {
            const body = req.body
            usersModel.insert(body).then((result) => {
                res.json(result)
            }).catch((err) => {
                res.json(err)
            })
        } catch (error) {
            res.json(error)
        }
    },
    update: (req,res) => {
        try {
            const id = req.params.id
            const body = req.body
            usersModel.update(body,id).then((result) => {
                res.json(result)
            }).catch((err) => {
                res.json(err)
            })
        } catch (error) {
            res.json(error)
        }
    },
    delete: (req,res) => {
        try {
            const id = req.params.id
            usersModel.delete(id).then((result) => {
                res.json(result)
            }).catch((err) => {
                res.json(err)
            })
        } catch (error) {
            res.json(error)
        }
    }
}

module.exports = users