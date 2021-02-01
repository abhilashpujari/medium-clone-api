export default class ApiException extends Error {
    public code: number;
    public message: string;

    constructor(message = '', code = 500) {
        super(message);
        this.code = code;
        this.message = message;
    }
}
