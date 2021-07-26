// untuk meghandle query table product

const db = require('../config/db')

const productModel = {
    getAll: () =>{
        return new Promise((resolve, reject) => {
            db.query(`select * from category` , (err, result) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(result)
                }
            })
        })
    },
    getList: (search,field,typeSort,limit,offset) =>{
        return new Promise((resolve, reject) => {
            db.query(
                `select * from category 
                WHERE category LIKE "%${search}%" 
                ORDER BY ${field} ${typeSort}
                LIMIT ${limit} OFFSET ${offset}` , (err, result) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(result)
                }
            })
        })
    },
    getDetails: (id) =>{
        return new Promise((resolve, reject) => {
            db.query(`select * from category where id='${id}'` , (err, result) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(result)
                }
            })
        })
    },
    insert: (body) =>{
        return new Promise((resolve, reject) => {
            db.query(`INSERT INTO product (category) VALUE ('${body.category}')` , (err, result) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(result)
                }
            })
        })
    },
    update: (body,id) =>{
        return new Promise((resolve, reject) => {
            db.query(`update product set category='${body.category}' where id='${id}'` , (err, result) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(result)
                }
            })
        })
    },
    delete: (id) =>{
        return new Promise((resolve, reject) => {
            db.query(`delete from category where id='${id}'` , (err, result) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(result)
                }
            })
        })
    },
}

module.exports = productModel