import {ObjectSchema} from "joi";
import ValidationException from "../exceptions/ValidationException";

function validateData(schema: ObjectSchema) {
    return async (req, res, next) => {
        try {
            req.body = await schema.validateAsync(req.body, {abortEarly: false});
            next();
        } catch (error) {
            let errorMessage = '';
            let errorLength = error.details.length;

            console.log(error.details[0]);
            for(let i = 0; i < errorLength; i++) {
                errorMessage += error.details[i].message + ' ';
            }
            next(new ValidationException(JSON.stringify(errorMessage)));
        }
    }
}

export default validateData;
