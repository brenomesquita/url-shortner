const express = require('express');
const { urlShortnerController } = require('./urlShortner_controller');
let controller = new urlShortnerController();

const router = express.Router();
router.route('/').get(controller.urlShortnerGet.bind(controller));
router.route('/').post(controller.urlShortnerPost.bind(controller));

module.exports = router;
