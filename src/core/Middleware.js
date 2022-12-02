const { ErrorCore } = require("./Error");

class CoreMiddleware extends ErrorCore {
    constructor() {
        super();
    }
}

module.exports = {
    CoreMiddleware
};
