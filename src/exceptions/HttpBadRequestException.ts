import ApiException from "./ApiException";

export default class HttpBadRequestException extends ApiException {
    constructor(message) {
        super(message, 400);
    }
}
