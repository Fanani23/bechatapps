const pool = require("../configs/db");

const createUsers = (data) => {
  const { id, email, username, password } = data;
  return new Promise((resolve, reject) => {
    pool.query(
      `INSERT INTO users (id, email, username, password) VALUES ('${id}','${email}','${username}','${password}')`,
      (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(err);
        }
      }
    );
  });
};

const checkEmail = (email) => {
  console.log(email);
  return new Promise((resolve, reject) =>
    pool.query(`SELECT * FROM users WHERE email='${email}'`, (err, result) => {
      if (!err) {
        resolve(result);
      } else {
        reject(err);
      }
    })
  );
};

const getAll = () => {
  return new Promise((resolve, reject) =>
    pool.query(`SELECT * FROM users`, (err, result) => {
      if (!err) {
        resolve(result);
      } else {
        reject(err);
      }
    })
  );
};

const update = (data) => {
  const { id, phone, bio, username, photo } = data;
  return new Promise((resolve, reject) =>
    pool.query(
      `UPDATE users SET username='${username}', photo='${photo}', bio='${bio}', phone='${phone}' WHERE id='${id}'`,
      (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(err);
        }
      }
    )
  );
};

module.exports = {
  createUsers,
  checkEmail,
  getAll,
  update,
};
