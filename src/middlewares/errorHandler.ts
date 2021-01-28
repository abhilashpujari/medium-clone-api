import ApiException from "../exceptions/ApiException";
import logger from "../logger";

function errorHandler(error, req, res, next) {
    if (error instanceof ApiException) {
        logger.warn(error.message);
        return res.status(error.code).json({code: error.code, message: error.message});
    }

    logger.error(error.message);
    return res.status(500).json({code: 500, message: 'Something went wrong!!'});
}

export default errorHandler;
