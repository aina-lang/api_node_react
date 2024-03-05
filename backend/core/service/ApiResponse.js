export default class ApiResponse {
    constructor(status, statusMessage, statusCode) {
        this.status = status;
        this.statusCode = statusCode;
        this.statusMessage = statusMessage;
    }

    send(req, res, data) {
        res.json({ data: data, satus: this.status, statueCode: this.statusCode, message: this.statusMessage });
    }
}