import {ObjectSchema} from "joi";
import ValidationException from "../exceptions/ValidationException";

function validateData(schema: ObjectSchema) {
    return async (req, res, next) => {
        try {
            req.body = await schema.validateAsync(req.body, {abortEarly: false});
            next();
        } catch (error) {
            next(new ValidationException(error.details));
        }
    }
}

export default validateData;
