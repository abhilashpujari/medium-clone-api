import ApiException from "../exceptions/ApiException";
import JWTUtils from "../utils/JWTUtils";
import TokenMistMatchException from "../exceptions/TokenMistMatchException";

function authenticate() {
    return async (req, res, next) => {
        let authorisationHeader = req.header('Authorization');

        if (!authorisationHeader) {
            next(new ApiException('Authentication token is missing', 401));
            return;
        }

        let [tokenIdentifier = '', tokenValue = ''] = authorisationHeader.split(' ');
        if (tokenIdentifier !== 'Token' || !tokenValue) {
            next(new ApiException('Authentication token is missing', 401));
            return;
        }

        try {
            req.user = await JWTUtils.decode(tokenValue);
            next();
        } catch (error) {
            next(new TokenMistMatchException('Token mismatch'));
        }
    }

}

export default authenticate
