import {CustomError} from "./custom-error";

export class RouteNotFound extends CustomError {
    statusCode = 404;
    message = "Route not found";

    constructor() {
        super();
        Object.setPrototypeOf(this, RouteNotFound.prototype);
    }

    serialzineErrors() {
        return [
            {
                message: this.message
            }
        ]
    }
}