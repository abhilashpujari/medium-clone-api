import Joi from 'joi';

const createSchema = Joi.object({
    email: Joi.string().email(),
    password: Joi.string().min(3).required(),
    username: Joi.string().lowercase().alphanum().min(3).max(30).required()
});

export default {
    createSchema
};
