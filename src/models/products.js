// untuk meghandle query table product

const db = require('../config/db')

const productModel = {
    getAll:() => {
          return new Promise((resolve, reject) => {
            db.query(
                 `SELECT id_product,picture,product_name,price,category 
                  from product left join category on product.categoryID=category.id` , (err, result) => {
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
                `select id_product,picture,product_name,price,category 
                from product left join category on product.categoryID=category.id 
                WHERE product_name LIKE "%${search}%" 
                ORDER BY ${field} ${typeSort}
                LIMIT ${limit} OFFSET ${offset}`,(err, result) => {
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
            db.query(
                   `select id_product,picture,product_name,price,category 
                    from product left join category on product.categoryID=category.id 
                    where id_product='${id}'` , (err, result) => {
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
            db.query(
                `INSERT INTO product (pictures,product_name,price,categoryID) 
                VALUE ('${body.picture}','${body.product_name}','${body.price}','${body.category}')`, 
            (err, result) => {
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
            db.query(`update product set picture='${body.picture}',product_name='${body.product_name}',price='${body.price}}',categoryID='${body.category}' where id_product='${id}'` , (err, result) => {
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
            db.query(`delete from product where id_product='${id}'` , (err, result) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(result)
                }
            })
        })
    }
}

module.exports = productModel