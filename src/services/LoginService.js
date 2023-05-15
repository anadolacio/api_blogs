const { User } = require('../models');
// const { createToken } = require('../auth/authFunctions.js');

const loginField = async (email, password) => {
   const user = await User.findOne({ where: { email, password } });
  return user;
};

module.exports = { loginField };