const express = require('express');
const urlShortner = require('./business/urlShortner/urlShortner_routes');

const router = express.Router();
router.use('/urlShortner', urlShortner);
router.use('/health', (_req, res) => res.status(200).send());

module.exports = router;
