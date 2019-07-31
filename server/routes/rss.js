const express = require('express');
const fileController = require('../FileController');
const router = express.Router();

router.post('/rss', fileController.rssParse,
  (req, res) => {
    return res.status(200).json({ parsedRSS: res.locals.parsedRSS });
});
