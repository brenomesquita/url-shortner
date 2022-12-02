const { CoreController } = require("../../../core/Controller");
const urlShortnerService = require("./urlShortner_service");

class urlShortnerController extends CoreController {
    constructor() {
        super();
        this.service = new urlShortnerService();
    }

    async urlShortnerGet(req, res, next) {
        try{
            const result = await this.service.urlShortnerGet(req);
            return res.status(200).json({data: result });
        } catch (error) {
            return next(this.errorResponse(422, error.message));
        }
    }

    async urlShortnerPost(req, res, next) {
        try{
            const result = await this.service.urlShortnerPost(req);
            return res.status(200).json({ data: result });
        } catch (error) {
            return next(this.errorResponse(422, error.message));
        }
    }
}

module.exports = {
    urlShortnerController
};
