export default class ApiException {
    public code: number;
    public message: string;

    constructor(message = '', code = 500) {
        this.code = code;
        this.message = message;
    }
}
