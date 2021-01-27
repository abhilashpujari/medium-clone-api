import Joi, {ObjectSchema} from 'joi';

const register = (data) => {
    let schema = Joi.object({
        email: Joi.string().email(),
        password: Joi.string().min(3).required(),
        username: Joi.string().alphanum().min(3).max(30).required()
    });

    return {
        async validate() {
            try {
                return await schema.validateAsync(data)
            } catch (e) {
                console.log(e.message);
            }
        }
    }
};

export default {
    register
};
