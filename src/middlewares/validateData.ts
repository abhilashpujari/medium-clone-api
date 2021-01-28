import {ObjectSchema} from "joi";
import HttpBadRequestException from "../exceptions/HttpBadRequestException";

function validateData(schema: ObjectSchema, data: object) {
    return async (req, res, next) => {
        try {
            await schema.validateAsync(data, {abortEarly: false});
            next();
        } catch (error) {
            next(new HttpBadRequestException(error.details));
        }
    }
}

export default validateData;
