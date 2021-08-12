// untuk meghandle query table product

const db = require('../config/db');

const usersModel = {
  getAll: () => new Promise((resolve, reject) => {
    db.query('SELECT * from users', (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  }),
  getList: (search, field, typeSort, limit, offset) => new Promise((resolve, reject) => {
    db.query(
      `select * from users  
                WHERE username LIKE "%${search}%" 
                ORDER BY ${field} ${typeSort}
                LIMIT ${limit} OFFSET ${offset}`, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      },
    );
  }),
  getDetails: (id) => new Promise((resolve, reject) => {
    db.query(`select * from users where id='${id}'`, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  }),
  insert: (body) => new Promise((resolve, reject) => {
    db.query(`INSERT INTO users (username,password,picture,display_name,first_name,last_name,ttgl,gender,email_address,phone_number,delivery_address) 
                VALUE ('${body.username}','${body.password}','${body.picture}','${body.display_name}',
                    '${body.first_name}','${body.last_name}','${body.ttgl}','${body.gender}',
                    '${body.email_address}','${body.phone_number}','${body.delivery_address}')`, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  }),
  login: (body) => new Promise((resolve, reject) => {
    db.query(`
        select * from users where username=${body.username},password = ${body.password}`, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  }),
  register: (body, pass) => new Promise((resolve, reject) => {
    db.query(
      `INSERT INTO users (username,password,first_name,last_name,ttgl,gender,email_address,phone_number) 
        VALUE (
          '${body.username}','${pass}','${body.first_name}','${body.last_name}',
          '${body.ttgl}','${body.gender}','${body.email_address}','${body.phone_number}'
          )`, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      },
    );
  }),
  cekUsername: (body) => new Promise((resolve, reject) => {
    db.query(`select * from users where username='${body.username}'`, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  }),
  update: (body, id) => new Promise((resolve, reject) => {
    db.query(
      `update USERS set username='${body.username}',password='${body.password}',
                picture='${body.picture}',display_name='${body.display_name}',first_name='${body.first_name}',
                last_name='${body.last_name}',ttgl='${body.ttgl}',gender='${body.gender}',email_address='${body.email_address}',
                phone_number='${body.phone_number}',delivery_address='${body.delivery_address}' where id='${id}'`, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      },
    );
  }),
  delete: (id) => new Promise((resolve, reject) => {
    db.query(`delete from users where id='${id}'`, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  }),
};

module.exports = usersModel;
