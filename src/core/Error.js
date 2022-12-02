class ErrorCore {
    conflict(message) {
        let errorMessage = message || "Conflict";
        return this.errorResponse(409, errorMessage);
    }

    forbidden(message) {
        let errorMessage = message || "Forbidden";
        return this.errorResponse(403, errorMessage);
    }

    notFound(message) {
        let errorMessage = message || "Resource not found";
        return this.errorResponse(404, errorMessage);
    }

    unauthorized(message) {
        let errorMessage = message || "Missing token or invalid token";
        return this.errorResponse(401, errorMessage);
    }

    unprocessableEntity(message) {
        let errorMessage = message || "Invalid credentials or missing parameters";
        return this.errorResponse(422, errorMessage);
    }

    errorResponse(status, message, err = new Error()) {
        err.status = status || 422;
        err.message = { message } || { message: "Unprocessable entity" };
        return err;
    }
}

module.exports = {
    ErrorCore
};