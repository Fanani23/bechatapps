const jwt = require("jsonwebtoken");

const generateToken = async (email, id) => {
  const payload = {
    email,
    id,
    type: "access-token",
  };
  const options = {
    algorithm: "HS256",
    expiresIn: "1d",
  };
  const result = jwt.sign(payload, process.env.SECRET_KEY, options);
  return result;
};

const verify = async (token) => {
  const result = jwt.verify(token, process.env.SECRET_KEY);
  return result;
};

module.exports = {
  generateToken,
  verify,
};
