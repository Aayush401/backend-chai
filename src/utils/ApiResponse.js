class ApiResponse {
    constructor(statusCode, message="success", data) {4
        this.statusCode = statusCode;
        this.message = message;
        this.data = data;
        this.success = statusCode<400;

    }
}
