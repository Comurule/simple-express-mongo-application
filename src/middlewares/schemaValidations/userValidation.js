const Joi = require('joi');

exports.validateSchema = async (req, res, next) => {
    try {
        await userValidation.validateAsync(req.body);
        next()
    } catch (error) {
        console.log(error.message)
        res.status(400).json({status: false, message: error.message})
    }
};

const userValidation = Joi.object({
    email: Joi.string()
        .email()
        .required(),
    password: Joi.string()
        .min(4)
        .required()
})