const { response } = require("../middlewares/common");
const bcrypt = require("bcryptjs");
const { v4: uuidv4 } = require("uuid");
const { generateToken } = require("../helpers/jwt");
const modelUsers = require("../models/users");
const cloudinary = require("../configs/clouds");

const userController = {
  register: async (req, res) => {
    let {
      rows: [users],
    } = await modelUsers.checkEmail(req.body.email);
    if (users) {
      return response(res, 403, false, [], "Email already registered");
    }
    let password = bcrypt.hashSync(req.body.password);
    let data = {
      id: uuidv4(),
      email: req.body.email,
      password,
      username: req.body.username,
    };

    try {
      const result = await modelUsers.createUsers(data);
      if (result) {
        console.log(result);
        response(res, 200, true, [], "Register success, please login");
      }
    } catch (err) {
      response(res, 404, false, err, "Reigster failed");
    }
  },

  login: async (req, res) => {
    try {
      const email = req.body.email;
      console.log(email, "email");
      let {
        rows: [users],
      } = await modelUsers.checkEmail(email);
      if (!users) {
        return response(res, 404, false, null, "Email not found");
      }
      const password = req.body.password;
      const validation = bcrypt.compareSync(password, users.password);
      if (!validation) {
        return response(res, 404, false, null, "Wrong password");
      }
      const id = users.id;
      const fullname = users.fullname;
      const token = await generateToken(email, id);
      response(res, 200, true, { token, data: users }, "Login success");
    } catch (err) {
      return response(res, 404, false, err, "Login failed");
    }
  },

  getAll: async (req, res) => {
    try {
      const result = await modelUsers.getAll();
      if (result) {
        console.log(result);
        response(res, 200, true, result.rows, "Get all success");
      }
    } catch (err) {
      response(res, 404, false, err, "Get all failed");
    }
  },

  update: async (req, res) => {
    try {
      const { id } = req.payload;
      const image = await cloudinary.uploader.upload(req.file.path, {
        folder: "toko",
      });
      const data = {
        id,
        username: req.body.username,
        photo: image.url,
        bio: req.body.bio,
        phone: req.body.phone,
      };
      await modelUsers.update(data);
      return response(res, 200, true, null, "Update user success");
    } catch (error) {
      return response(res, 404, true, error, "Update user failed");
    }
  },

  profile: async (req, res, next) => {
    const { email } = req.payload;
    try {
      const {
        rows: [users],
      } = await modelUsers.checkEmail(email);

      if (users === undefined) {
        res.json({
          message: "Invalid token",
        });
        return;
      }
      delete users.password;
      response(res, 200, true, users, "Get data success");
    } catch (error) {
      console.log(error);
      response(res, 404, false, "Get data failed");
    }
  },
};

exports.userController = userController;
