const { ErrorCore } = require('./Error');

class CoreController extends ErrorCore {
    constructor() {
        super();
    }
}

module.exports = {
    CoreController
};
