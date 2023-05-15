const Joi = require('joi');
const LoginService = require('../services/LoginService');
// const { User } = require('../models/User');

const userValidation = async (req, res, next) => {
    const { displayName, email, password, image } = req.body;

    // const registeredEmail = await User.findOne({ where: { email } });
    const registeredEmail = await LoginService.loginField(email, password);

    if (registeredEmail) {
        return res.status(409).json({ message: 'User already registered' });
    }

    const fields = Joi.object({
        displayName: Joi.string().min(8).required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(6).required(),
        image: Joi.string(),
    });

    const { error } = fields.validate({ displayName, email, password, image });
  if (error) return res.status(400).json({ message: error.details[0].message });
  next();
};

module.exports = { userValidation };