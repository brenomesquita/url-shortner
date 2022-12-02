const { PUBLIC_ROUTES } = require('../../utils/acl');

// eslint-disable-next-line consistent-return
const protect = (req, res, next) => {
    if (PUBLIC_ROUTES.includes(req.url)) {
        next();
    } else {
        try {
            //TODO: ADD verifications for futures privates routes;
            next();
        } catch (_error) {
            return _error;
        }
    }
};

module.exports = protect;
