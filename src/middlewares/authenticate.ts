import ApiException from "../exceptions/ApiException";
import JWTUtils from "../utils/JWTUtils";
import TokenMistMatchException from "../exceptions/TokenMistMatchException";
import {getManager} from "typeorm";
import {User} from "../entity/User";

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
            let decodedData  = await JWTUtils.decode(tokenValue);
            const entityManager = getManager();
            // @ts-ignore
            const user = await entityManager.getRepository(User).findOne({id: decodedData.id});

            if (!user) {
                next(new ApiException('User not found', 404));
                return;
            }

            req.user = user;
            next();
        } catch (error) {
            next(new TokenMistMatchException('Token mismatch'));
        }
    }

}

export default authenticate
