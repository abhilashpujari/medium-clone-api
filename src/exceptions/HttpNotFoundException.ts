import ApiException from "./ApiException";

export default class HttpNotFoundException extends ApiException {
    constructor(message) {
        super(message, 404);
    }
}
