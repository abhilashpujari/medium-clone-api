import ApiException from "../exceptions/ApiException";
import logger from "../logger";
import {QueryFailedError} from "typeorm";

function errorHandler(error, req, res, next) {
    // Log sql error
    if (error instanceof QueryFailedError) {
        logger.error(JSON.stringify(error));
    } else {
        if (error.code === 500 || error.code === 0) {
            logger.error(error.message);
        } else {
            logger.warn(error.message);
        }
    }

    if (((error.code !== 500)) && error instanceof ApiException) {
        return res.status(error.code).json({code: error.code, message: error.message});
    }

    return res.status(500).json({code: 500, message: 'Something went wrong!!'});
}

export default errorHandler;
