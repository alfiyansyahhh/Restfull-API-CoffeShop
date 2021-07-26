//hanya menghendel data dari table category
// const db = require('../config/db')

const categoryModel = require('../models/category')
const {success,failed } = require('../helpers/respon')
const category = {
    getList: (req,res) => {
        try {
            const query = req.query
            const search = query.search === undefined ? "" : query.search
            const field = query.field === undefined ? "id" : query.field
            const typeSort = query.sort === undefined ? "" : query.sort
            const limit = query.limit === undefined ? 50 : query.limit
            const offset = query.page === undefined || query.page == 1 ? 0 : (query.page-1)*limit
            categoryModel.getList(search,field,typeSort,limit,offset).then(async (result) => {
                allData= await categoryModel.getAll()
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
            categoryModel.getDetails(id).then((result) => {
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
            categoryModel.insert(body).then((result) => {
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
            categoryModel.update(body,id).then((result) => {
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
            categoryModel.delete(id).then((result) => {
                res.json(result)
            }).catch((err) => {
                res.json(err)
            })
        } catch (error) {
            res.json(error)
        }
    }
}

module.exports = category