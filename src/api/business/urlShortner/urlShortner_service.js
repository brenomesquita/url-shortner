const { CoreService } = require('../../../core/Service');
const { generateShortUrl } = require('../../../utils/generateRandombytes');
const Model = require('./urlShortner_model');

class urlShortnerService extends CoreService {
    constructor() {
        super();
        this.model = Model;
    }

    async urlShortnerGet(req) {
        try {
            let url = await this.model.findOne({
                short_url: req.body.shortUrl
            });
            if(!url) {
                throw new Error('URL_DOES_NOT_EXIST');
            }
    
            const long_url = url.long_url;
            const short_url = url.short_url;
            
            return {
                long_url,
                short_url
            };
        } catch(err) {
            throw new Error(err);
        }
    }

    async urlShortnerPost(req) {
        try {
            const { long_url, short_url } = await this.model.create({
                long_url: req.body.longUrl,
                short_url: `www.us.com/${await generateShortUrl()}`
            });

            return {
                long_url,
                short_url
            };
        } catch(err) {
            throw new Error(err);
        }
    }
}

module.exports = urlShortnerService;