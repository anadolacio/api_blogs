const Joi = require('joi');

const passwordAndEmailValidation = (req, _res, next) => {
    const fields = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().required(),
    }).validate(req.body);

    const { error } = fields;
  if (error) return next({ message: 'Some required fields are missing', statusCode: 400 });
  return next();
};

module.exports = { passwordAndEmailValidation };