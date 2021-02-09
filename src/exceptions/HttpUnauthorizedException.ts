import ApiException from "./ApiException";

export default class HttpUnauthorizedException extends ApiException {
    constructor(message = "You don't have access to this resource") {
        super(message, 401);
    }
}
