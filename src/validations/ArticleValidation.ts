import Joi from 'joi';

const createSchema = Joi.object({
    title: Joi.string().min(3).max(255).required(),
    description: Joi.string().min(1).max(255).required(),
    body: Joi.string().required(),
    tagList: Joi.array().items(Joi.string())
});

const updateSchema = Joi.object({
    title: Joi.string().min(3).max(255),
    description: Joi.string().min(3).max(255),
    body: Joi.string().min(1),
    tagList: Joi.array().items(Joi.string())
});

export default {
    createSchema,
    updateSchema
};
