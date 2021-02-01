import ApiException from "./ApiException";

export default class TokenMistMatchException extends ApiException {
    constructor(message) {
        super(message, 401);
    }
}
