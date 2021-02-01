import Joi from 'joi';

const registerSchema = Joi.object({
    email: Joi.string().min(1).email(),
    password: Joi.string().min(1).min(3).required(),
    username: Joi.string().lowercase().alphanum().min(3).max(30).required()
});

const loginSchema = Joi.object({
    email: Joi.string().min(1).email(),
    password: Joi.string().min(1).required()
});

export default {
    loginSchema,
    registerSchema
};
