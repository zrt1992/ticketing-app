import {CustomError} from "./custom-error";

export class DatabaseConnectionError extends CustomError {
    statusCode = 500;
    reason = "database connection error";

    constructor() {
        super();
        Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
    }

    serialzineErrors() {
        return [
            {
                message: this.reason
            }
        ]
    }
}