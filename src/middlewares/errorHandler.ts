import ApiException from "../exceptions/ApiException";

function errorHandler(error, req, res, next) {
    if (error instanceof ApiException) {
        return res.status(error.code).json({code: error.code, message: error.message});
    }

    return res.status(500).json({code: 500, message: 'Something went wrong!!'});
}

export default errorHandler;
